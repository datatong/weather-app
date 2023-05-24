import key from './key';

//QUERY SELECTORS//
let searchForm = document.querySelector('#search-form');
let searchInput = document.querySelector('#search-input');

//Set up inital placeholder weather data
(async function defaultWeather() {
    try {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${key}&q=washington`,
            {
                mode: 'cors',
            }
        );    
        const weatherObj = await response.json();
        //Pull JSON and display it
        displayWeather(weatherObj);
    } catch (err) {
        console.log('An error has occured')
        console.log(err);
    }    
})();

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
        await timeout(3000);
        //Test the timeout and fetch
        (function logWeatherData() {
            console.log(weatherObj.location.name);
            console.log(weatherObj.location.region);
            console.log(weatherObj.current.condition.text);
            console.log(weatherObj.current.condition.icon);
            console.log(weatherObj.current.temp_f);
        })();
        //Pull JSON and display it
        displayWeather(weatherObj);
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
function displayWeather(data) {
    const city = data.location.name;
    const region = data.location.region;
    const condition = data.current.condition.text;
    const icon = data.current.condition.icon;
    const tempf = data.current.temp_f;
    //console.log(city, region, condition, icon, tempf);

    const location = document.querySelector('#location');
    location.innerText = city + ", " + region;
    const temp = document.querySelector('#temp');
    temp.innerText = tempf + "°F";
    const conditionIcon = document.querySelector('#condition-icon');
    conditionIcon.src = icon;
    const conditionText = document.querySelector('#condition-text');
    conditionText.innerText = condition; 
}
