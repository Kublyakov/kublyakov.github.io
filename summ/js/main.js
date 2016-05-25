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
  var input = document.getElementsByClassName('num-input');
  var inputClone = input[0].cloneNode(true);
  var container = document.getElementById('container');
  container.appendChild(inputClone);
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
}

var addInputBtn = document.getElementById('addInputBtn');
addInputBtn.addEventListener('click', addInput);
addInputBtn.addEventListener('click', removeBtn);

var removeInputBtn = document.getElementById('removeBtn');
removeInputBtn.addEventListener('click', removeInput);
removeInputBtn.addEventListener('click', removeBtn);