const tempElement = document.getElementById('temp');
const cityElement = document.getElementById('city');
const humidityElement = document.getElementById('humidity');
const windspeedElement = document.getElementById('windspeed');
const searchInput = document.getElementById('searchinput');
const searchIcon = document.getElementById('searchicon');
const weatherImg = document.getElementById('weather-img');

async function checkWeather(city) {
    const apiKey = 'f27b269d54e4fa1e72993364a80fa8bd';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (response.status === 200) {
        tempElement.innerHTML = `${Math.floor(data.main.temp)}°C`;
        cityElement.innerHTML = data.name;
        humidityElement.innerHTML = `${data.main.humidity}%`;
        windspeedElement.innerHTML = `${data.wind.speed} km/h`;

        const weatherCondition = data.weather[0].main;
        if (weatherCondition === "Clouds") {
            weatherImg.src = 'images/cloud.png';
        } else if (weatherCondition === 'Clear') {
            weatherImg.src = 'images/sun.jpeg';
        } else if (weatherCondition === 'Rain') {
            weatherImg.src = 'images/rain.png';
        } else if (weatherCondition === 'Drizzle') {
            weatherImg.src = 'images/drizzle.png';
        } else if (weatherCondition === 'Mist') {
            weatherImg.src = 'images/mist2.jpeg';
        } else if (weatherCondition === 'Haze') {
            weatherImg.src = 'images/haze.png';
        } else {
            weatherImg.src = 'images/default.jpeg';
        }
    } else {
        alert('City not found!');
    }
}

searchIcon.addEventListener('click', () => {
    const city = searchInput.value;
    if (city) {
        checkWeather(city);
    }
});
