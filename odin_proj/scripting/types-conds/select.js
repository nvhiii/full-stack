// select the places to change
const select = document.querySelector("select");
const para = document.querySelector("p");

function changeWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent = "The weather is sunny.";
  } else if (choice === "rainy") {
    para.textContent = "The weather is rainy.";
  } else if (choice === "cloudy") {
    para.textContent = "The weather is cloudy";
  } else {
    para.textContent = "The weather is snowy";
  }
}

select.addEventListener("change", changeWeather);
