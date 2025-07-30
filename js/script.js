function add(prevOperand, nextOperand) {
  return prevOperand + nextOperand;
}

function subtract(prevOperand, nextOperand) {
  return prevOperand - nextOperand;
}

function multiply(prevOperand, nextOperand) {
  return prevOperand * nextOperand
}

function divide(prevOperand, nextOperand) {
  return prevOperand / nextOperand;
}

let calculation = 0;
let prevOperand = calculation;
let nextOperand = 0;
let operator = "";

function operate(prevOperand, operator, nextOperand) {
  switch (operator) {
    case "add":
      calculation = add(prevOperand, nextOperand);
      break;
    case "subtract":
      calculation = subtract(prevOperand, nextOperand);
      break;
    case "multiply":
      calculation = multiply(prevOperand, nextOperand);
      break;
    case "divide":
      calculation = divide(prevOperand, nextOperand);
      break;
  }

  return calculation;
}

const calculator = document.querySelector(".calc");
const display = calculator.querySelector(".display");
const digitButtons = calculator.querySelectorAll(".digit");
const operatorButtons = calculator.querySelectorAll(".operator");
let operatorButtonClicked = false;
let expectingNextOperand = false;

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
    if (expectingNextOperand) {
      display.textContent = buttonValue;
      expectingNextOperand = false;
    } else {
      display.textContent += buttonValue;
    }
  }
}

function handleOperatorClick(event) {
  expectingNextOperand = true;

  const target = event.target
  const buttonValue = target.value;

  if (operatorButtonClicked) {
    nextOperand = parseInt(display.textContent, 10);
    operatorButtonClicked = false;
  } else {
    prevOperand = parseInt(display.textContent, 10);
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
      display.textContent = operate(prevOperand, nextOperand, operator);
      operatorButtonClicked = false;
      break;
  }
}
