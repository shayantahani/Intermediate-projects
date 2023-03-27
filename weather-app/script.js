const apiKey = "edc228562ac0a8aa3116d41c0687cf56";
const form = document.querySelector(".container form");
const cardContainer = document.querySelector("#weather_wrapper");
const input = document.querySelector("input");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputValue = input.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather, wind } = data;
      let temp = Math.round(main.temp);
      console.log(data);
      console.log(main);
      console.log(name);
      console.log(sys.country);
      console.log(weather);
      let card = document.createElement("div");
      let iconimg = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      card.classList.add("weatherCard");
      card.innerHTML = `
        <div class="currentTemp">
            <span class="temp">${temp}&deg;</span>
            <span class="location">${inputValue}</span>
            <span class="country">${sys.country}</span>
        </div>
        <div class="currentWeather">
            <div  class="img-container">
              <img class="conditions" src='${iconimg}' alt="condition">
            </div>
            <div class="info">
              <span class="description">${weather[0].description}</span>
            </div>
        </div>`;
      cardContainer.appendChild(card);
    });
});

// main name sys weather-> description and icon
