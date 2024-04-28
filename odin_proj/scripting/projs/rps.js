const userSelect = document.querySelector("#random");
const results = document.querySelector("#result");

function getComputerChoice() {

    const selections = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * selections.length);
    
    return selections[choice];

}

userSelect.addEventListener("click", () => {

    const selections = ["rock", "paper", "scissors"];
    let cpu = getComputerChoice();

    let userSelection = prompt("Enter rock paper or scissors.");

    let lowerCase = userSelection.toLowerCase();
    if (selections.includes(lowerCase)) {

        if ()

    }


})