let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}


function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}


function add() {
  display.value += '+';
}

function subtract() {
  display.value += '-';
}

function multiply() {
  display.value += '*';
}

function divide() {
  display.value += '/';
}
function modulo(){
    display.value+='%';
}
function deleteLastCharacter() {
    display.value = display.value.slice(0,-1);
    
  }
