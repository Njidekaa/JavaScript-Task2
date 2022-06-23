const x = prompt("Enter first number");
const y = prompt("Enter second number");

const operation = prompt("Select the operator of choice: (+, -, *, /)");

if (operation == "+") {
  result = parseFloat(x) + parseFloat(y);
} else if (operation == "-") {
  result = parseFloat(x) - parseFloat(y);
} else if (operation == "*") {
  result = parseFloat(x) * parseFloat(y);
} else if (operation == "/") {
  result = parseFloat(x) / parseFloat(y);
} else {
  alert("Invalid Operation, Please Try Again.");
}

alert("The result is : " + result);
