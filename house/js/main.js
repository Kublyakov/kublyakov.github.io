'use strict';

let goal = 1000000;
let goalElem = document.querySelector('.goal');
let summElem = document.querySelector('.summ');
let depositeSumm = document.querySelector('.deposite-summ');
let depositeBtn = document.querySelector('.deposite-btn');

goalElem.innerHTML = `Мы хотим накопить: ${goal}`;
summElem.innerHTML = `Мы уже накопили: ${localStorage.getItem('savingSumm')}`;

let checkLocal = () => {
  if (localStorage.getItem('savingSumm') == null) {
    let initialSumm = prompt('Введите начальную сумму:', '');
    initialSumm;
    localStorage.setItem('savingSumm', initialSumm);
    summElem.innerHTML = `Мы уже накопили: ${localStorage.getItem('savingSumm')}`;
  }
};
checkLocal();

depositeBtn.addEventListener('click', () => {
  if (depositeSumm.value > 0) {
    localStorage.setItem('savingSumm', +localStorage.getItem('savingSumm') + +depositeSumm.value);
    summElem.innerHTML = `Мы уже накопили: ${localStorage.getItem('savingSumm')}`;
  }
  else {
    alert('Введите число > 0');
  }
});
