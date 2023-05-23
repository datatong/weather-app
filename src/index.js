//QUERY SELECTORS//
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let searchBtn = document.querySelector('#search-button');

//show a default location weather or placeholder

//fetch
async function fetchWeather(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=06291ad7191745fa992190804230705&q=${location}`,
        {
            mode: 'cors',
        }
    );
    //add error handling here

    const weatherObj = await response.json();    
    //console.log(weatherObj);
    (function logWeatherData() {
        console.log(weatherObj.location.name);
        console.log(weatherObj.location.region);
        console.log(weatherObj.current.condition.text);
        console.log(weatherObj.current.condition.icon);
        console.log(weatherObj.current.temp_f);
    })();

    //show a loading message until fetch is complete (test with timeout)
}

//fetch weather data via submit form event
searchForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        searchWeather();
    });

//function to search input location
function searchWeather() {
    let searchInput = document.querySelector('#search-input');
    const searchLocation = searchInput.value;
    fetchWeather(searchLocation);
}
