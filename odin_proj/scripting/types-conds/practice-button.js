const button = document.querySelector("button");
const customParagraph = document.querySelector("#custom-para");

function popUp() {
  let question = prompt("What is your name?", "");
  customParagraph.textContent = `Hello, ${question}! The length of your name is ${question.length}`;
}

button.addEventListener("click", popUp);
