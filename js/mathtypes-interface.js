var Calculator = require('./../js/pingpong.js').calculatorModule;



$(document).ready(function() {
  $('#math-types-form').submit(function(event) {
    event.preventDefault();
    var firstNumber = parseInt($('#math1').val());
    var secondNumber = parseInt($('#math2').val());
    var operator = $('#operator').val();
      var mathCalc = new Calculator();

    if (operator == "add") {
      mathResult = mathCalc.add(firstNumber, secondNumber);
      $('#total').text('Your result is ' +  mathResult);
    } else if (operator == "subtract") {
      mathResult = mathCalc.subtract(firstNumber, secondNumber);
      $('#total').text('Your result is ' +  mathResult);
    } else if (operator == "multiply") {
      mathResult = mathCalc.multiply(firstNumber, secondNumber);
      $('#total').text('Your result is ' +  mathResult);
    } else if (operator == "divide") {
      mathResult = mathCalc.divide(firstNumber, secondNumber);
      $('#total').text('Your result is ' +  mathResult);
    } else {
      var total = "error";
    }

  });
});
//
