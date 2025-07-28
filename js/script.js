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

const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll(".calc-buttons > .digit");
const operatorButtons = document.querySelectorAll(".calc-buttons > .operator");

[...digitButtons, ...operatorButtons].forEach(button => {
  display.textContent = "";
  button.addEventListener("click", displayClickedButton);
});

function displayClickedButton(event) {
  const target = event.target
  const buttonValue = target.value;

  if (target.className === "operator") {
    display.textContent += ` ${buttonValue} `;
  } else {
    display.textContent += buttonValue;
  }
}
