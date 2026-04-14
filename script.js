const apiKey = "2752387c5699f17863099662d9532e44";
const weatherDataEl = document.getElementById('weatherData');
const cityInputEl = document.getElementById('cityInput');
const formEl = document.querySelector('form');

// When click the the submit button
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityValue = cityInputEl.value.trim();
    if (!cityValue) {
        showError("Please enter a city name");
        return;
    }
    getWeatherData(cityValue);
});

// Getting Weather Data
async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
        const data = await response.json();  
        
        if(Number(data.cod) !== 200) {
            showError("City not found");
            return;
        }
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}℃`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed}m/s`
        ];
        // Display data
        weatherDataEl.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        weatherDataEl.querySelector('.temperature').textContent = `${temperature}℃`;
        weatherDataEl.querySelector('.description').textContent = `${description}`;
        weatherDataEl.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join('');
    } catch (error) {
        console.error(error);
        showError("Unable to get weather data");
    }
}
// Clear all weather data display
function showError(message) {
    weatherDataEl.querySelector('.icon').innerHTML = "";
    weatherDataEl.querySelector('.temperature').textContent = "";
    weatherDataEl.querySelector('.description').textContent = message;
    weatherDataEl.querySelector('.details').innerHTML = '';
}