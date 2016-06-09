'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var inputContainer = document.getElementById('inputContainer');
  var input = document.getElementById('inputProduct');

  input.onfocus = function () {
    fetch('products.json').then(result => result.json()).then(data => {hint(data)});

    function hint(data) {
      input.oninput = function () {
        var value = input.value;
        for (var product in data) {
          if (product.indexOf(value) === 0 && value !== '') {
            addTip(product);
          }
        }
      }
    }
  };

  function addTip(product) {
    var tipElem = document.createElement('div');
    tipElem.className = 'tip-element';
    tipElem.innerHTML = product;
    inputContainer.appendChild(tipElem);
  }
});

// for (var i = 0; ; i++) {
//   if (product[i] === input.value) {
//     console.log(product);
//   }
// }