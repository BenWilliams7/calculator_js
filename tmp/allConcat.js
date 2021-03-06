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

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule;
var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
 });
