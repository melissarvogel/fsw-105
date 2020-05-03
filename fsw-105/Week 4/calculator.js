const readline = require("readline-sync")

let firstNumber = parseInt(question("What is your first number?"))

let secondNumber = parseInt(question("What is your second number?"))

let operation = question("Would you like to add, subtract, multiply or divide?")

if (operation === "Add"){
  console.log("The result is: " + firstNumber + secondNumber)
}

if (operation === "Subtract"){
  console.log("The result is: " + firstNumber - secondNumber)
}

if (operation === "Multiply"){
  console.log("The result is: " + firstNumber * secondNumber)
}

if (operation === "Divide"){
  console.log("The result is: " + firstNumber / secondNumber)
}

