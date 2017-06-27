var Clock = require('./../js/alarm.js').clockModule;

$(document).ready(function() {
  $('#clock').submit(function(event) {
    event.preventDefault();
    var alarm = $('#time').val();
    var newClock = new Clock(alarm);
    var output = newClock.SetAlarm();
    $("#output").append("<li>" + output + "</li>");
  });
});
