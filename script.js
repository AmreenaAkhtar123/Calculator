let calculation = '';

function append(char) {
  calculation += char;
  updateDisplay();
}

function calculate() {
  try {
    calculation = eval(calculation).toString();
    updateDisplay();
  } catch (e) {
    calculation = 'Error';
    updateDisplay();
    calculation = '';
  }
}

function clearEntry() {
  calculation = '';
  updateDisplay();
}

function clearAll() {
  calculation = '';
  updateDisplay();
}

function backspace() {
  calculation = calculation.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = calculation;
}
