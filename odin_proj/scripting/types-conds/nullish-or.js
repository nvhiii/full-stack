// rewrite the following using ternary & ||
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
