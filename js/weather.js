const weather = document.querySelector("#weather span:last-child");
const city = document.querySelector("#weather span:first-child");

const API_KEY = "598ebee14fd2c02c01711e80baa146dd";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = `${data.name}`;
        weather.innerText = `${data.main.temp}º ${data.weather[0].main}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
