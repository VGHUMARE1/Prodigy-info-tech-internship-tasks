
async function getWeather() {
    try {
        const city=document.getElementById("locationInput").value;
        const API_KEY="24ee5e3f36ac65c9fa9f007df472b2e7";
        const URL="https://api.openweathermap.org/data/2.5/weather?";
        const res=await fetch(`${URL}q=${city}&appid=${API_KEY}&units=metric`);
        const jsonRes=await res.json();
        console.log(res);
        displayWeather(jsonRes);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('You might entered wrong location or error in fetching weather data. Please try again.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = '';

    const cityName = document.createElement('h2');
    cityName.textContent = data.name;

    const temperature = document.createElement('p');
    temperature.textContent = `Temperature: ${data.main.temp}°F`;

    const description = document.createElement('p');
    description.textContent = `Weather: ${data.weather[0].description}`;

    const humidity = document.createElement('p');
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    const windSpeed = document.createElement('p');
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    weatherInfo.appendChild(cityName);
    weatherInfo.appendChild(temperature);
    weatherInfo.appendChild(description);
    weatherInfo.appendChild(humidity);
    weatherInfo.appendChild(windSpeed);
}
