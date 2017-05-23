var apiKey = "e6fe13f85771d8fd9bf0ec55a79d0d67";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {

      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");


    });
  });
});
