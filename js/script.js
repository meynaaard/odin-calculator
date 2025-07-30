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
let firstNum = calculation;
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
let operatorButtonClicked = false;
let expectingSecondNum = false;

digitButtons.forEach(button => {
  button.addEventListener("click", handleDigitClick);
});

operatorButtons.forEach(button => {
  button.addEventListener("click", handleOperatorClick);
})

function handleDigitClick(event) {
  const target = event.target
  const buttonValue = target.value;

  if (target.className === "digit") {
    if (expectingSecondNum) {
      display.textContent = buttonValue;
      expectingSecondNum = false;
    } else {
      display.textContent += buttonValue;
    }
  }
}

function handleOperatorClick(event) {
  expectingSecondNum = true;
  
  const target = event.target
  const buttonValue = target.value;

  if (operatorButtonClicked) {
    secondNum = parseInt(display.textContent, 10);
    operatorButtonClicked = false;
  } else {
    firstNum = parseInt(display.textContent, 10);
    operatorButtonClicked = true;
  }

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
    case "calculate":
      display.textContent = operate(firstNum, secondNum, operator);
      operatorButtonClicked = false;
      break;
  }
}
