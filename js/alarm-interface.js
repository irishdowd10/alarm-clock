var Clock = require('./../js/alarm.js').clockModule;

$(document).ready(function() {
  $('#clock-form').submit(function(event) {
    $("#notice").text("");
    event.preventDefault();
    var alarm = $('#time').val();
    var newClock = new Clock(alarm);

    var setTimer = setInterval(timer, 1000);
      function timer() {
        console.log(moment().format('H:mm'));
        if (newClock.SetAlarm(alarm) === true) {
          console.log("success");
          $("#notice").text("WAKE UP!");
          clearInterval(setTimer);
        }
      }
  });
});
