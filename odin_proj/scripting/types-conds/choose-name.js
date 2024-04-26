const names = [
  "Chris",
  "Li Kang",
  "Anne",
  "Francesca",
  "Mustafa",
  "Tina",
  "Bert",
  "Jada",
];
const para = document.createElement("p");

function randChoice(list) {
  let min = 0;
  let max = list.length;
  let range = max - min;

  let choice = Math.floor(Math.random() * range);
  return list[choice];
}

let min = 0;
let max = names.length;
let range = max - min;

let choice = Math.floor(Math.random * range); // this is a single num within range
