(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Back End
function Calculator(skinName) {
  this.skin = skinName;
}


Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(firstNumber, secondNumber) {
    return (firstNumber + secondNumber);
};

Calculator.prototype.subtract = function(firstNumber, secondNumber) {
    return (firstNumber - secondNumber);
};

Calculator.prototype.multiply = function(firstNumber, secondNumber) {
    return (firstNumber * secondNumber);
};

Calculator.prototype.divide = function(firstNumber, secondNumber) {
    return (firstNumber / secondNumber);
};


exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

// Front End

var Calculator = require('./../js/pingpong.js').calculatorModule;



$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});


$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

},{"./../js/pingpong.js":1}]},{},[2]);
