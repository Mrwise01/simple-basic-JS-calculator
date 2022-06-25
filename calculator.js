// //program for a simple calculator

// const operator = prompt('Enter operator (either +,-,*or/):');

// const number1 = parseFloat(prompt('Enter first number:'));
// const number2 = parseFloat(prompt('Enter second number:'));

// let result;

// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }
// console.log(`${number1} ${operator} ${number2} = ${result}`);

// function myfunction() {
//     var x, y, z, operator;
//     x = prompt("Enter first number");
//     y = prompt("Enter second number");
//     operator = prompt("Enter an operator (either +,-,*,or/):");

//     if (operator == "+") {
//         z = Number(x) + Number(y);
//     }
//     else if (operator === !null) {
//         z = "Error"
//     }

//     else if (x = !null) {
//         z = "Error"
//     }
//     else if (y = !null) {
//         z = "Error"
//     }
//     else if (operator == "-") {
//         z = Number(x) - Number(y);
//     }
//     else if (operator == "*") {
//         z = Number(x) * Number(y);
//     }

//     else if (operator == "/") {
//         z = Number(x) / Number(y);
//     }
//     return z;

// }
// let result = myfunction(number);
// console.log()
let x, y;
x = parseInt(prompt('Enter the first number'));
y = parseInt(prompt('Enter the second number'));
// z = parseInt(prompt("Enter Operator (either +,-,*,/):"));
let z = x + y;
let a = x - y;
let b = x * y;
let c = x / y;
alert("the sum of given numbers is:" + z);