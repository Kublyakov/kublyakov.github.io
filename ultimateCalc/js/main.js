'use strict';

const setPercent = () => {
  let percentInput = document.querySelector('.percent');
  let percentBtn = document.querySelector('.percent-btn');
  let currentPercent = localStorage.getItem('percent');

  if (currentPercent > 0) {
    percentInput.value = currentPercent;
  }

  percentBtn.addEventListener('click', () => {
    if (percentInput.value > 0) {
      console.log(percentInput.value);
      localStorage.setItem('percent', percentInput.value);
    }
  });
}; 

setPercent();

/*
* Вводим число с необходимыми процентами.
* Запоминаем число и подставляем его в инпут.
* Предыдущие значения выводим в отдельную таблицу.
* При клике на них они подставляются в инпут.
* Таблица сортируется по давности ввода значений.
* */