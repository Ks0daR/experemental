const moment = require('moment');

const refs = {
  happy: document.querySelector('.timer-hb'),
  day: document.querySelector('.days'),
  hour: document.querySelector('.hours'),
  minute: document.querySelector('.minutes'),
  currentTime: document.querySelector('.currentTime'),
};
let targetTime = moment([2020, 0, 1]);

function newTime() {
  let currentTime = moment();
  refs.happy.textContent = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  refs.day.textContent = `${targetTime.diff(currentTime, 'days')} дней`;
  refs.hour.textContent = `${targetTime.diff(currentTime, 'hours')} часов`;
  refs.minute.textContent = `${targetTime.diff(currentTime, 'minutes')} минут`;
  // let date = moment().format();
}
window.setInterval(newTime, 500);
