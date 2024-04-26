// Write a program that takes a user’s input and prints
// the numbers from one to the number the user entered.
// However, for multiples of three print Fizz instead of
// the number and for the multiples of five print Buzz. For
// numbers which are multiples of both three and five print FizzBuzz.

// input
let userNum = parseInt(prompt("Enter a num"));

if (userNum % 5 == 0 && userNum % 3 == 0) {
  console.log("FizzBuzz");
} else if (userNum % 5 == 0) {
  console.log("Buzz");
} else if (userNum % 3 == 0) {
  console.log("Fizz");
} else {
  console.log(`${userNum}`);
}
