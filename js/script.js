function add(firstNum, secondNum) {
  return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  return firstNum * secondNum
}

function divide(firstNum, secondNum) {
  return firstNum / secondNum;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operator) {
  let runningTotal;

  switch (operator) {
    case "+":
      runningTotal = add(firstNum, secondNum);
      break;
    case "-":
      runningTotal = subtract(firstNum, secondNum);
      break;
    case "*":
      runningTotal = multiply(firstNum, secondNum);
      break;
    case "/":
      runningTotal = divide(firstNum, secondNum);
      break;
  }

  return runningTotal;
}

const calculator = document.querySelector(".calc");
const display = calculator.querySelector(".display");
const digitButtons = calculator.querySelectorAll(".calc-buttons > .digit");
const operatorButtons = calculator.querySelectorAll(".calc-buttons > .operator");

digitButtons.forEach(button => {
  display.textContent = "";
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const target = event.target
  const buttonValue = target.value;

  display.textContent += buttonValue;
}
