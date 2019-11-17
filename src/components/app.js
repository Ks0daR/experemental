const moment = require('moment');

const refs = {
  happy: document.querySelector('.timer-hb'),
  day: document.querySelector('.days'),
  hour: document.querySelector('.hours'),
  minute: document.querySelector('.minutes'),
  currentTime: document.querySelector('.currentTime'),
};
var a = moment();
var b = moment([2020, 0, 1]);

function newTime() {
    refs.happy.textContent = moment().format();
    refs.day.textContent = `${b.diff(a, 'days')} дней`;
    refs.hour.textContent = `${b.diff(a, 'hours')} часов`;
    refs.minute.textContent = `${b.diff(a, 'minutes')} минут`;
  let date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
}
const dateId = window.setInterval(newTime, 500);
// console.log(dateId);
// refs.currentTime.textContent = dateId;
