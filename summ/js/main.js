// var num = +prompt('Введите первое число', '');
// var num2 = +prompt('Введите второе число', '');
// var summ = +prompt('Введите сумму', '');
// var taxSumm = +prompt('Введите сумму с налогами', '');

// numPercent = num / summ * 100;
// numPercent2 = num2 / summ * 100;

// total = taxSumm / 100 * numPercent;
// total2 = taxSumm / 100 * numPercent2;

// console.log(total.toFixed(2), total2.toFixed(2));

function addInput(parent, placeholder, value) {
  var input = document.createElement('input');
  var container = document.getElementById(parent);
  input.type="number";
  input.className = "num-input form-control";
  input.placeholder = placeholder;
  input.value = value;
  container.appendChild(input);
  input.focus();
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
  var input = document.getElementsByClassName('num-input');
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
      addInput('finalInputsContainer', 'Итоговое число', result());
    }
  }
}

function result() {
  return 1111;
}

var addInputBtn = document.getElementById('addInputBtn');
addInputBtn.addEventListener('click', function () {
  addInput('container', 'Введите число');
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
    addInput('container', 'Введите число');
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
    if (event.keyCode === 13 && this.value > 0) {
      copyInputs();
    }
});