import * as utils from './utils';
import {render} from './render';
import {data} from './data';
import '../css/main.css';

let wrapper = document.createElement('div');
wrapper.className = 'topApp-wrapper';
wrapper.innerHTML = render();

document.querySelector('body').appendChild(wrapper);
console.log('app init, content injected');

const progressbar = document.querySelector('.topApp-progress-bar-bg');
const progressbarCount = document.querySelector('.topApp-current-loading');
const scanFile = document.querySelector('.topApp-scan-file');
const countViruses = document.querySelector('.topApp-count');
const btnContinue = document.querySelector('.topApp-buttonContinue');
const btnCancel = document.querySelector('.topApp-buttonCancel');

let addEvent = elem => {
  elem.addEventListener('click', function (e) {
    e.preventDefault();
    let target = e.currentTarget;
    let href = target.getAttribute('href');
    if (href == '') {
      return false;
    }
    else {
      window.location.href = href;
    }
  }, false)
};

let initEvents = () => {
  addEvent(btnContinue);
  addEvent(btnCancel);
};

let percentCounter = () => {
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
initEvents();