let detect = require('./detect.js');

export let detectOs = () => {
  let ua = detect.parse(navigator.userAgent), result;
  if (ua) {
    result = `${ua.os.family} ${ua.os.major}.${ua.os.minor}.${ua.os.patch}`;
  }
  else {
    result = 'Android';
  }
  return result;
};