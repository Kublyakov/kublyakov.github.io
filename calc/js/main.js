'use strict';

var chooseContainer = document.getElementById('chooseContainer');
var proportionCalcBtn = document.getElementById('proportionCalcBtn');
var percentCalcBtn = document.getElementById('percentCalcBtn');
var proportionCalcContainer = document.getElementById('proportionCalcContainer');
var percentCalcContainer = document.getElementById('percentCalcContainer');
var calcName = document.getElementById('calcName');
var container = document.getElementById('container');
var BTN = 13;

var showCalc = {
  proportion: function () {
    proportionCalcContainer.style.display = 'block';
    percentCalcContainer.style.display = 'none';
    proportionCalcBtn.classList.add('active');
    calcName.innerHTML = 'Калькулятор долей';
    if (localStorage.getItem('calcType') !== 'Proportion') {
      localStorage.setItem('calcType', 'Proportion');
      percentCalcBtn.classList.remove('active');
    }
  },
  percent: function () {
    percentCalcContainer.style.display = 'block';
    proportionCalcContainer.style.display = 'none';
    percentCalcBtn.classList.add('active');
    calcName.innerHTML = 'Калькулятор процентов';
    if (localStorage.getItem('calcType') !== 'Percent') {
      localStorage.setItem('calcType', 'Percent');
      proportionCalcBtn.classList.remove('active');
    }
  }
};

if (localStorage.getItem('calcType') === 'Proportion') {
  showCalc.proportion();
}

else if (localStorage.getItem('calcType') === 'Percent') {
  showCalc.percent();
}

chooseContainer.addEventListener('click', function (e) {
  var target = e.target;

  if (target === proportionCalcBtn) {
    showCalc.proportion();
  }
  else if (target === percentCalcBtn) {
    showCalc.percent();
  }
  else {
    return false;
  }
});

var input = {
  item: function () {
    var elem = document.createElement('input');
    elem.type = 'text';
    elem.className = 'num-input form-control';
    elem.placeholder = 'Введите число';
    elem.tabIndex = 1;
    container.appendChild(elem);
    elem.focus();
  }
};

container.addEventListener('keydown', function (e) {
  var target = e.target;
  if (target.tagName.toLowerCase() === 'input' && event.keyCode === BTN && getFloat(target) > 0) {
    input.item();
    target.classList.remove('error-input');
  }
  else if (target.tagName.toLowerCase() === 'input' && event.keyCode === BTN && !(getFloat(target) > 0)) {
    target.classList.add('error-input');
  }
});

function getFloat(target) {
  return parseFloat(target.value .replace(/,/, '.'));
}