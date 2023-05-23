//QUERY SELECTORS//
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');
let searchBtn = document.querySelector('#search-button');

//show a default location weather or placeholder

//fetch
async function fetchWeather(location) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=06291ad7191745fa992190804230705&q=${location}`,
            {
                mode: 'cors',
            }
        );    
        const weatherObj = await response.json();
        console.log('fetching data...');
        await timeout(5000);    
        //console.log(weatherObj);
        (function logWeatherData() {
            console.log(weatherObj.location.name);
            console.log(weatherObj.location.region);
            console.log(weatherObj.current.condition.text);
            console.log(weatherObj.current.condition.icon);
            console.log(weatherObj.current.temp_f);
        })();
        //show a loading message until fetch is complete (test with timeout)
    } catch (err) {
        console.log('An error has occured')
        console.log(err);
    }
    
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

//setTimeout as a promise for async/await
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}