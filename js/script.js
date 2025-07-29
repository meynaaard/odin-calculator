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

let calculation = 0;
let firstNum = 0;
let secondNum = 0;
let operator = "";

function operate(firstNum, secondNum, operator) {
  switch (operator) {
    case "add":
      calculation = add(firstNum, secondNum);
      break;
    case "subtract":
      calculation = subtract(firstNum, secondNum);
      break;
    case "multiply":
      calculation = multiply(firstNum, secondNum);
      break;
    case "divide":
      calculation = divide(firstNum, secondNum);
      break;
  }

  return calculation;
}

const calculator = document.querySelector(".calc");
const display = calculator.querySelector(".display");
const digitButtons = calculator.querySelectorAll(".digit");
const operatorButtons = calculator.querySelectorAll(".operator");

[...digitButtons, ...operatorButtons].forEach(button => {
  display.textContent = "";
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const target = event.target
  const buttonValue = target.value;

  if (target.className === "digit") {
    display.textContent += buttonValue;
  }

  if (target.className === "operator") {
    if (buttonValue !== "calculate") {
      firstNum = parseInt(display.textContent, 10);
      display.textContent = "";

      switch (buttonValue) {
        case "add":
          operator = "add";
          break;
        case "subtract":
          operator = "subtract";
          break;
        case "multiply":
          operator = "multiply";
          break;
        case "divide":
          operator = "divide";
          break;
      }
    } else if (buttonValue === "calculate") {
      secondNum = parseInt(display.textContent, 10);
      display.textContent = "";
      display.textContent = operate(firstNum, secondNum, operator);
    }
  }
}
