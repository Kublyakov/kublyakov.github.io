let detect = require('./detect.js');

export let detectOs = () => {
  let ua = detect.parse(navigator.userAgent), result;
  let {family, major, minor} = ua.os;
  if (ua) {
    if (major) {
      result = `${family} ${major || 0}.${minor || 0}`;
    }
    else {
      result = family;
    }
  }
  else {
    result = 'Android';
  }
  return result;
};

export let createHumanDate = () => {
  let d = new Date();
  let day = d.getDate();
  let year = d.getFullYear();
  let monthes = d.getMonth();
  return `${day}.${monthes}.${year}`;
};

let rand = num => Math.floor(Math.random() * num);

export let randomFile = data => {
  let os = detect.parse(navigator.userAgent).os.family.toLowerCase().split(' ')[0];
  let platform = data.platforms.filter(item => new RegExp(os).test(item.platform))[0];
  if (platform && platform.files) {
    return platform.files[rand(platform.files.length)];
  }
};

export let incrementNumber = () => {
    let start = 1;
    return function () {
    return start += Math.floor(1 + Math.random() * (4 - 1));
  }
};

export let appData = {
  os: detectOs(),
  date: createHumanDate(),
  scan: 'system',
  count: 1
};