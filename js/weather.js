navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "33e918631d11b30338c8df9b841fab78";

function onGeoOk(position) {
  console.log(position);
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      // const city = document.querySelector("#weather span:last-child");
      // city.innerText = ;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} / ${data.name}`;
    });
}

function onGeoError() {
  alert("몰?루");
}
