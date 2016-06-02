'use strict';

var links = document.getElementsByClassName('navbar-nav')[0];
var link = 'index.html';
var templates = location.origin + '/kublyakov.github.io/history/';
var container = document.getElementById('container');

function getTemplate(link) {
  return fetch(templates + link)
    .then(
      function(response) {
        return response.text();
      }
    )
    .catch(function() {
      alert('Конец!');
    });
}
var home = 'home.html';
getTemplate(home).then(function (data) {
  insertTemplate(data);
  history.pushState(data, null, link);
});

function insertTemplate(data) {
  container.innerHTML = data;
}

function removeActive() {
  var removeActive = links.querySelector('.active');
  removeActive.classList.remove('active');
}

function goPage() {
  links.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;
    var targetParent = target.parentElement;
    if (target.tagName === 'A' && !(targetParent.classList.contains('active'))) {

      removeActive();
      targetParent.classList.add('active');

      var link = target.getAttribute('href');
      // getContent(link, true);

    }
    else if (target.tagName === 'A' && targetParent.classList.contains('active')) {
      console.log('NOOO');
    }
  })
}

window.addEventListener("popstate", function(e) {
  getContent(location.pathname, false);
});

function getContent(link, addEntry) {
    getTemplate(link).then(function (data) {
      insertTemplate(data);
      history.pushState(null, null, link);
    });
    function insertTemplate(data) {
      container.innerHTML = data;
    }
    if(addEntry == true) {
      history.pushState(null, null, link);
    }
}

goPage();