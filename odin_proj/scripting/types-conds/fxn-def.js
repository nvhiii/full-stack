const text = document.querySelector("#box");

text.addEventListener("keydown", (event) =>
  console.log(`You pressed ${event.key}`)
);
