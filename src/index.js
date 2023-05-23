import key from './key';

//QUERY SELECTORS//
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');

//Show a default location weather or placeholder

//Fetch function
async function fetchWeather(location) {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${key}&q=${location}`,
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
        displayWeather();
    } catch (err) {
        console.log('An error has occured')
        console.log(err);
    }    
}

//Fetch weather data via submit form event
searchForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        searchWeather();
    });

//Function to search input location
function searchWeather() {
    let searchInput = document.querySelector('#search-input');
    const searchLocation = searchInput.value;
    fetchWeather(searchLocation);
}

//SetTimeout as a promise for async/await
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    //Show a loading message until fetch is complete
}

//DOM MANIPULATION//
function displayWeather() {
    let location = document.querySelector('#location');
    location.innerHTML = weatherObj.location.name;
}
