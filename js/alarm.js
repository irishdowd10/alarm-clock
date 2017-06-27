function Clock(Time) {
  this.time = Time;
}

Clock.prototype.SetAlarm = function(alarm) {
  var status = false;
  var currentTime = moment().format('HH:mm');
  console.log(this.time);
  if (alarm === moment().format('HH:mm')){
    status = true;
  }
  return status;
};

function update() {
  $('#clock').html(moment().format('MMMM D, YYYY H:mm:ss'));
}
setInterval(update, 1000);

exports.clockModule = Clock;
