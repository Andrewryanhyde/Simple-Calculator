console.clear();

function add(x, y) {
  return (x + y);
}

function subtract(x, y) {
  return (x - y);
}

function multiply(x, y) {
  return (x * y);
}

function divide(x, y) {
  return (x / y);
}

var calc = {
  first: null,
  operator: null,
  second: null
}

function calculation() {
  if (calc.first && calc.operator && calc.second) {
  	var result = null;
    switch(calc.operator) {
      case "+":
        result = add(calc.first, calc.second);
        break;
      case "-":
        result = subtract(calc.first, calc.second);
        break;
      case "/":
        result = divide(calc.first, calc.second);
        break;
      case "*":
        result = multiply(calc.first, calc.second);
        break;
      default:
        console.log("Invalid operator.");
        break;
    }
    displayToScreen(result);
    clear();
  }
}

function clear() {
	calc.first = null;
  calc.operator = null;
  calc.second = null;
}


var $screen = $('#screen');
function displayToScreen(str) {
	$screen.html(str);
}

function clearCalc() {
	$screen.html('');
}

function displayCalculation() {
	var display = '';
	if (calc.first) {
  	display += calc.first;
  }
  if (calc.operator) {
  	display += calc.operator;
  }
  if (calc.second) {
  	display += calc.second;
  }
  displayToScreen(display);
}

function processButton(button) {
	var num = Number(button);
  if (num || num === 0) {
  	// It's a number
    var firstNumber = calc.first;
    var secondNumber = calc.second;
    if (firstNumber === null) {
      calc.first = num;
    } else if (calc.operator === null) {
      calc.first = Number(String(firstNumber) + String(num));
    } else if (secondNumber === null) {
      calc.second = num;
    } else {
      calc.second = Number(String(secondNumber) + String(num));
    }
  } else {
    // It's an operator
    if (button === "=") {
      calculation();
    }
    else if (button === "C") {
      clear();
    }
    else {
      calc.operator = button;
    }
  }
}

var $buttons = $('.row > div');
$buttons.click(function() {
  var button = $(this).html();
  processButton(button);
  if (button === "C") {
  	clearCalc();
  } else if (button !== "=") {
		  displayCalculation();
  }
});
