import * as utils from './utils';
import {data} from './data';

const progressbar = document.querySelector('.topApp-progress-bar-bg');
const progressbarCount = document.querySelector('.topApp-current-loading');
const scanFile = document.querySelector('.topApp-scan-file');
const countViruses = document.querySelector('.topApp-count');
const btnContinue = document.querySelector('.topApp-buttonContinue');
const btnCancel = document.querySelector('.topApp-buttonCancel');

let userOs = [...document.querySelectorAll('.topApp-os')];
let userDate = document.querySelector('.topApp-date');

let percentCounter = () => {
  let os = utils.detectOs();
  userOs.forEach(item => item.textContent = os);
  userDate.textContent = utils.createHumanDate();
  let i = 1;
  let inc = utils.incrementNumber();
  let timerId = setInterval(() => {
    i++;
    progressbar.style.width = i + '%';
    progressbarCount.textContent = i + '%';
    if (i % 4 === 0) {
      scanFile.textContent = utils.randomFile(data);
    }
    if (i % 8 === 0) {
      countViruses.textContent = inc();
    }
    if (i == 100) clearInterval(timerId);
  }, 100);
};

percentCounter();

let reg = /[(\?|\&)]([^=]+)\=([^&#]+)/g;
let url = document.location.href; //'?aff_sub={campaignid}&aff_sub2={zoneid}&aff_sub3={123}'; after tests replays on
// document.location.href

let klirik = url.match(reg);

if (Array.isArray(klirik) && klirik.length > 0) {
  var result = klirik.map(item => {
    let t = item.split('=');
    let obj = {};
    obj.key = t[0].slice(1);
    obj.value = t[1];
    return obj;
  });
}

let createUrl = () => {
  let resultUrl = btnContinue.getAttribute('href');
  if (!resultUrl) {
    alert('Укажите ссылку для кнопки "Продолжить"');
    return '#';
  }
  if (result && result.length > 0) {
    result.forEach(item => {
      if (item.value) {
        resultUrl += item.value + '/';
      }
    });
    return resultUrl;
  }
};

btnContinue.setAttribute('href', createUrl());
btnCancel.addEventListener('click', function () {
  window.close();
}, false);