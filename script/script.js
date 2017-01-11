function getEndTime(end_time) {
  var t = Date.parse(end_time) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'all': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function i_clock(id, end_time) {
  var clock = document.getElementById(id);
  var my_days = clock.querySelector('.days');
  var my_hours = clock.querySelector('.hours');
  var my_minutes = clock.querySelector('.minutes');
  var my_seconds = clock.querySelector('.seconds');

  function update() {
    var t = getEndTime(end_time);

    my_days.innerHTML = t.days;
    my_hours.innerHTML = ('0' + t.hours).slice(-2);
    my_minutes.innerHTML = ('0' + t.minutes).slice(-2);
    my_seconds.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  update();
  var timeinterval = setInterval(update, 1000);
}

var full_finish = new Date(Date.parse(new Date()) + 8 * 24 * 60 * 60 * 1000);
i_clock('countdown', full_finish);