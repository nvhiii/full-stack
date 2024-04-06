user = prompt("Who's there? ");

if (user === "Admin") {
  pwd = prompt("Enter the password: ");
  if (pwd === "TheMaster") {
    console.log("Weclome!");
  } else if (pwd === "" || pwd === null) {
    console.log("Wrong password.");
  } else {
    console.log("Cancelled");
  }
} else if (user === "" || user === null) {
  // handles empty and cancelled input
  console.log("Cancelled");
} else {
  console.log("I don't know you.");
}
