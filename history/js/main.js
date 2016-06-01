'use strict';

var links = document.querySelectorAll('.navbar-nav a');
var templates = 'file:///C:/Projects/kublyakov.github.io/history/templates/';

console.log(links);

var request = new XMLHttpRequest();
request.open('GET', templates + 'contacts.html', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    console.log('AAAAAAAAAAAAA');
    var resp = request.responseText;
  } else {
    console.log('error');
  }
};

request.onerror = function() {
  console.log('connection error');
};

request.send();

function getUrl() {
  return fetch(templates + 'contacts.html')
    .then(
      function(response) {
        return response.text();
      }
    )
    .catch(function() {
      alert('Конец!');
    });
}

getUrl().then(function (data) {
  console.log(data);
});