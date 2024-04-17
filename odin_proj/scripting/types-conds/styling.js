// select the html
// select the select
// create update fxn, use for nested fxns
// use ternary

const select = document.querySelector("select");
const html = document.querySelector("html");

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () =>
  select.value === "Dark" ? update("black", "white") : update("white", "black")
);
