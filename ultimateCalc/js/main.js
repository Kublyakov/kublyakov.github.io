'use strict';

const percentError = () => {
  console.log('error');
};

const currentPercent = () => {
  let percentInput = document.querySelector('.percent');
  let percentBtn = document.querySelector('.percent-btn');
  let localPercent = localStorage.getItem('percent');
  let percentInputValue = percentInput.value;

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
    }
    else {
      percentError();
    }
  });
};

currentPercent();

/*
* Вводим число с необходимыми процентами.
* Запоминаем число и подставляем его в инпут.
* Предыдущие значения выводим в отдельную таблицу.
* При клике на них они подставляются в инпут.
* Таблица сортируется по давности ввода значений.
* */