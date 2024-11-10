function refreshWeather(response) {
  let temperatureValueElement = document.querySelector("#temperaturevalue");
  let temperature = response.data.temperaturevalue;
  let cityElement = document.querySelector("#Mandy-Weather-app-city");

  cityElement.innerHTML = response.data.city;
  temperatureValueElement.innerHTML = Math.round(temperaturevalue);
}

function searchCity(city) {
  let apiKey = "396262bbd3oce4f20c3b41t44bae4cfa";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Bulawayo");
