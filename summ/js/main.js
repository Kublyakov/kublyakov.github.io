var PAR1 = document.getElementById('container');
var PAR2 = document.getElementById('finalInputsContainer');
var ENTER = 13;

function addInput(parent, placeholder, value) {
  var input = document.createElement('input');
  input.type="number";
  input.className = "num-input form-control";
  input.placeholder = placeholder;
  input.value = value;
  input.tabIndex = "1";
  parent.appendChild(input);
  if (parent.id === 'container') {
    input.focus();
  }
  else if (parent.id === 'finalInputsContainer') {
    var inputArr = parent.children;
    inputArr[0].focus();
  }
}

function removeBtn() {
  var removeBtn = document.getElementById('removeBtn');
  var inputs = document.getElementsByClassName('num-input');
  if (inputs.length > 1) {
    removeBtn.className = "btn btn-danger";
  }
  else {
    removeBtn.className = "hide";
  }
}

function removeInput() {
  var container = document.getElementById('container');
  var input = container.children;
  if (input.length > 1) {
    input[input.length - 1].remove();
  }
  input[input.length - 1].focus();
}

function inputCount() {
  var input = container.children;
  var summ = 0;
  for (var i = 0; i < input.length; i++) {
    summ += +input[i].value;
  }
  if (summ >= 0) {
    return summ;
  }
  else {
    return 'Введите корректные числа';
  }
}

function firstSumm() {
  var firstSumm = document.getElementById('firstSumm');
  firstSumm.innerHTML = inputCount();
}

function copyInputs() {
  var input = container.children;
  for (var i = 0; i < input.length; i++) {
    if (input[i].value > 0) {
      var result = +secondSumm.value * (input[i].value / inputCount());
      addInput(PAR2, 'Итоговое число', result.toFixed(2));
    }
  }
}

var addInputBtn = document.getElementById('addInputBtn');
addInputBtn.addEventListener('click', function () {
  addInput(PAR1, 'Введите число');
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
  if (target.tagName = 'input' && event.keyCode === ENTER && target.value > 0) {
    addInput(PAR1, 'Введите число');
    removeBtn();
  }
});

container.addEventListener('change', function (event) {
  var target = event.target;
  if (target.tagName = 'input') {
    firstSumm();
  }
});

var secondSumm = document.getElementById('secondSumm');
secondSumm.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER && this.value > 0 && inputCount() > 0) {
    copyInputs();
  }
  else if (event.keyCode === ENTER && !(inputCount() > 0)) {
    alert('Проверьте все вводимые данные');
  }
});