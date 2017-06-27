function Clock(Time) {
  this.time = Time;
}

Clock.prototype.SetAlarm = function() {
console.log("hello");
};

function update() {
  $('#clock').html(moment().format('MMMM D, YYYY H:mm:ss'));
}

setInterval(update, 1000);

exports.clockModule = Clock;
