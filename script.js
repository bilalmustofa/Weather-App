const apiKey = "2752387c5699f17863099662d9532e44";
const weatherDataEl = document.getElementById('weatherData');
const cityInputEl = document.getElementById('cityInput');
const formEl = document.querySelector('form');

// When click the the submit button
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

// Getting Weather
async function getWeatherData(cityValue) {}