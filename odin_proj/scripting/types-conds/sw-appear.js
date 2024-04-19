// given code in mdn exercise, active learning: more color choices:

const select = document.querySelector("select");
const html = document.querySelector(".output");

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.addEventListener("change", () => {
  // choice is the word
  const choice = select.value;

  switch (choice) {
    case "Dark":
      update("black", "white");
      break;
    case "Light":
      update("white", "black");
      break;
    case "UMich":
      update("midnightblue", "yellow");
      break;
    case "Neon":
      update("mediumvioletred", "chartreuse");
      break;
    case "Cotton Candy":
      update("paleturquoise", "pink");
      break;
    case "Lakers":
      update("purple", "yellow");
      break;
    case "Yellow":
      update("yellow", "black");
      break;
    case "Psychedelic":
      update("greenyellow", "fuchsia");
      break;
  }
});
