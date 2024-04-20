const textBox = document.querySelector("#box");

textBox.addEventListener("keydown", (event) =>
  console.log(`You typed out ${event.key}`)
);
