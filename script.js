let currentInput = '0';
let previousInput = '';
let operation = null;
let resetScreen = false;

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0' || resetScreen) {
    currentInput = number;
    resetScreen = false;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendDecimal() {
  if (resetScreen) {
    currentInput = '0.';
    resetScreen = false;
    updateDisplay();
    return;
  }
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function appendOperator(op) {
  if (operation !== null) calculate();
  previousInput = currentInput;
  operation = op;
  resetScreen = true;
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  resetScreen = true;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  operation = null;
  updateDisplay();
}

// Initialize display
updateDisplay();