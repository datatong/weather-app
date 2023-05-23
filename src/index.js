//QUERY SELECTORS//
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let searchBtn = document.querySelector('#search-button');

//show a default location weather or placeholder
async function fetchWeather(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=06291ad7191745fa992190804230705&q=${location}`,
        {
            mode: 'cors',
        }
    );
    const weatherData = await response.json()    
    console.log(weatherData);
}

//fetch weather data via search input
searchForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        getWeather();
    });

function getWeather() {
    let searchInput = document.querySelector('#search-input');
    const searchLocation = searchInput.value;
    fetchWeather(searchLocation);
}
//show a loading message until fetch is complete
