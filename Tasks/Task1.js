                           // Simple Calculator


var num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
const operator = ['+', '-', '*', '/', '%'];

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);

if (num2 !== 0) {
    console.log("Division:", num1 / num2);
    console.log("Modulus:", num1 % num2);
} else {
    console.log("Division by zero is not allowed");
}
