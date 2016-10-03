'use strict';
let localPercent = localStorage.getItem('percent');
let percentInput = document.querySelector('.percent');
let percentBtn = document.querySelector('.percent-btn');
let percentInputValue = percentInput.value;

const percentError = () => {
  alert('Ааа, всё сломалось!');
};

const currentPercent = () => {
  if (localPercent > 0) {
    percentInput.value = localPercent;
  }
  else {
    percentError();
  }

  percentBtn.addEventListener('click', () => {
    percentInputValue = percentInput.value.replace(/,/g, '.');
    if (percentInputValue > 0) {
      localStorage.setItem('percent', percentInputValue);
      location.reload();
    }
    else {
      percentError();
    }
  });
};
currentPercent();

const calc = () => {
  let gettingNumber = document.querySelector('.getting-number');
  let resultNumber = document.querySelector('.result-number');

  gettingNumber.addEventListener('keydown', (e) => {
    let target = e.target;
    let num = +(target.value);
    if (num > 0 && e.keyCode === 13) {
      let subresult = num + (+num / 100 * 18);
      let result = subresult + (subresult / 100 * localPercent);
      resultNumber.value = result.toFixed(2);
      target.select();
    }
  });
}

calc();

/*
* Вводим число с необходимыми процентами.
* Запоминаем число и подставляем его в инпут.
* Предыдущие значения выводим в отдельную таблицу.
* При клике на них они подставляются в инпут.
* Таблица сортируется по давности ввода значений.
* */