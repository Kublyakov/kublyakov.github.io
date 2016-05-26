// var num = +prompt('Введите первое число', '');
// var num2 = +prompt('Введите второе число', '');
// var summ = +prompt('Введите сумму', '');
// var taxSumm = +prompt('Введите сумму с налогами', '');

// numPercent = num / summ * 100;
// numPercent2 = num2 / summ * 100;

// total = taxSumm / 100 * numPercent;
// total2 = taxSumm / 100 * numPercent2;

// console.log(total.toFixed(2), total2.toFixed(2));

function addInput() {
  var input = document.createElement('input');
  var container = document.getElementById('container');
  input.type="text";
  input.className = "num-input";
  input.placeholder = "Введите число";
  container.appendChild(input);
  input.focus();
}

function removeBtn() {
  var removeBtn = document.getElementById('removeBtn');
  var inputs = document.getElementsByClassName('num-input');
  if (inputs.length > 1) {
    removeBtn.className = "remove-input";
  }
  else {
    removeBtn.className = "hide";
  }
}

function removeInput() {
  var input = document.getElementsByClassName('num-input');
  if (input.length > 1) {
    input[input.length - 1].remove();
  }
  input[input.length - 1].focus();
}

function inputCount() {
  var container = document.getElementById('container');
  var input = container.getElementsByTagName('input');
  var summ = 0;
  for (var i = 0; i < input.length; i++) {
    summ += +input[i].value;
  }
  return summ;
}

function firstSumm() {
  var firstSumm = document.getElementById('firstSumm');
  firstSumm.innerHTML = inputCount();
}

var addInputBtn = document.getElementById('addInputBtn');
addInputBtn.addEventListener('click', function () {
  addInput();
  removeBtn();
});

var removeInputBtn = document.getElementById('removeBtn');
removeInputBtn.addEventListener('click', function () {
  removeInput();
  removeBtn();
  firstSumm();
});

var container = document.getElementById('container');
container.addEventListener('keydown', function(event) {
  var target = event.target;
  if (target.tagName = 'input' && event.keyCode === 13 && target.value > 0) {
    addInput();
    removeBtn();
  }
});

container.addEventListener('change', function (event) {
  var target = event.target;
  if (target.tagName = 'input') {
    firstSumm();
  }
});