function appendToDisplay(value) {
    var currentDisplay = document.getElementById('display').value;
  
    if (isOperator(currentDisplay.slice(-1)) && isOperator(value)) {
      
      document.getElementById('display').value = currentDisplay.slice(0, -1) + value;
    } else {
 
      document.getElementById('display').value += value;
    }
  }
  
  function isOperator(char) {
    var operators = ['+', '-', '*', '/'];
    return operators.includes(char);
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function backspace() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
  }
  
  function calculate() {
    try {
      var expression = document.getElementById('display').value;
  
      expression = expression.replace(/%/g, '/100');
  
      document.getElementById('display').value = eval(expression);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }
  