const API_KEY = "d305ac90c86240f248fe29c1906775b8";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; // openweather API를 통해 현재 내 위도와 경도 등의 정보를 얻을 수 있다.

  fetch(url) // 직접 URL에 접속하는 것이 아닌 자바스크립트가 대신 접속해주는 fetch
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
