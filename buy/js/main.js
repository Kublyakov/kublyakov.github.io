'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var inputContainer = document.getElementById('inputContainer');
  var input = document.getElementById('inputProduct');

  input.onfocus = function () {
    fetch('products.json').then(result => result.json()).then(data => {hint(data)});

    function hint(data) {
      input.oninput = function () {
        var qwe = data.filter(function(val) {
          if (val.indexOf.charAt(0) === input.value) {
            console.log(qwe);
          }
        });
      }
    }
  };
});