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

function operate(prevOperand, operator, nextOperand) {
  let calculation = 0;

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

let prevOperand = null;
let nextOperand = null;
let operator = null;
let operatorButtonClicked = false;

calculator.addEventListener("click", (event) => {
  const target = event.target;
  const value = target.value;

  if (!target.matches("button")) return;

  if (target.classList.contains("digit")) {
    handleDigitClick(value);
  } else if (target.classList.contains("operator")) {
    handleOperatorClick(value);
  } else if (value === "calculate") {
    handleEqualsClick();
  } else if (value === "clear") {
    display.textContent = "0";
    reset();
  } else if (value === "backspace") {
    display.textContent = display.textContent.slice(0, -1);
  }
});

function handleDigitClick(value) {
  if (operatorButtonClicked) {
    display.textContent = value;
    operatorButtonClicked = false;
  } else {
    if (display.textContent === "0") {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  }
}

function handleOperatorClick(value) {
  const currentValue = parseInt(display.textContent, 10);

  if (operator && !operatorButtonClicked) {
    nextOperand = currentValue;
    const calculation = operate(prevOperand, operator, nextOperand);
    display.textContent = calculation;

    prevOperand = calculation;
    nextOperand = null;
  } else {
    prevOperand = currentValue;
  }

  operator = value;
  operatorButtonClicked = true;
}

function handleEqualsClick() {
  const currentValue = parseInt(display.textContent, 10);

  if (operator && prevOperand !== null) {
    nextOperand = currentValue;
    const calculation = operate(prevOperand, operator, nextOperand);

    display.textContent = calculation;
    prevOperand = calculation;

    operator = null;
    nextOperand = null;
    operatorButtonClicked = false;
  }
}

function reset() {
  prevOperand = null;
  nextOperand = null;
  operator = null;
  operatorButtonClicked = false;
  return;
}
