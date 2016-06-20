'use strict';

function showCalc() {
  let chooseContainer = document.getElementById('chooseContainer');

  chooseContainer.addEventListener('click', function (e) {
    let target = e.target;
    let proportionCalcBtn = document.getElementById('proportionCalcBtn');
    let percentCalcBtn = document.getElementById('percentCalcBtn');
    let proportionCalcContainer = document.getElementById('proportionCalcContainer');
    let percentCalcContainer = document.getElementById('percentCalcContainer');
    let calcName = document.getElementById('calcName');

    if (target === proportionCalcBtn) {
      proportionCalcContainer.style.display = 'block';
      percentCalcContainer.style.display = 'none';
      calcName.innerHTML = 'Калькулятор долей';
    }
    else if (target === percentCalcBtn) {
      percentCalcContainer.style.display = 'block';
      proportionCalcContainer.style.display = 'none';
      calcName.innerHTML = 'Калькулятор процентов';
    }
    else {
      return false;
    }
  })
}

if(!localStorage.getItem('calc')) {
  console.log('No calc');
} else {
  console.log('calc');
}