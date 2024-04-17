const para = document.querySelector("p");
const selectWeather = document.querySelector("select");

function setWeather() {
  let weather = selectWeather.value;

  switch (weather) {
    case "Sunny":
      para.textContent = "The weather is sunny.";
      break;
    case "Windy":
      para.textContent = "The weather is windy.";
      break;
    case "Rainy":
      para.textContent = "The weather is rainy.";
      break;
    case "Foggy":
      para.textContent = "The weather is foggy.";
      break;
  }
}

selectWeather.addEventListener("change", setWeather);
