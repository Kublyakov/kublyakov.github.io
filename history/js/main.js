// 'use strict';
//
// var links = document.getElementsByClassName('navbar-nav')[0];
// var link = 'index.html';
// var templates = location.origin + '/kublyakov.github.io/history/';
// var container = document.getElementById('container');
//
// function getTemplate(link) {
//   return fetch(templates + link)
//     .then(
//       function(response) {
//         return response.text();
//       }
//     )
//     .catch(function() {
//       alert('Конец!');
//     });
// }
//
// function insertTemplate(data) {
//   container.innerHTML = data;
// }
//
// function removeActive() {
//   var removeActive = links.querySelector('.active');
//   removeActive.classList.remove('active');
// }
//
// links.addEventListener('click', function (e) {
//   e.preventDefault();
//   var target = e.target;
//   var targetParent = target.parentElement;
//   if (target.tagName === 'A' && !(targetParent.classList.contains('active'))) {
//
//     removeActive();
//     targetParent.classList.add('active');
//
//     var href = target.getAttribute('href');
//     getContent(href, true);
//
//   }
//   else if (target.tagName === 'A' && targetParent.classList.contains('active')) {
//     console.log('NOOO');
//   }
// });
//
// window.addEventListener("popstate", function(e) {
//   getContent(location.pathname, false);
// });
//
// getTemplate(url).then(function (data) {
//   container.innerHTML = data;
//   if(addEntry == true) {
//     history.pushState(null, null, url);
//   }
// });

$('document').ready(function(){
  $('.link').on('click', function(e){
    // отменяем стандартное действие при клике
    e.preventDefault();
    // Получаем адрес страницы
    var href = $(this).attr('href');
    // Передаем адрес страницы в функцию
    getContent(href, true);
  });
});

// Добавляем обработчик события popstate, происходящего при нажатии на кнопку назад/вперед в браузере  
window.addEventListener("popstate", function(e) {
  // Передаем текущий URL
  getContent(location.pathname, false);
});

// Функция загрузки контента
function getContent(url, addEntry) {
  $.get(url).done(function(data) {
    // Обновление только текстового содержимого в сером блоке
    $('#container').html($(data).find("#container").html());
    // Если был выполнен клик в меню - добавляем запись в стек истории сеанса
    // Если была нажата кнопка назад/вперед, добавлять записи в историю не надо
    if(addEntry == true) {
      // Добавляем запись в историю, используя pushState
      history.pushState(null, null, url);
    }
  });
}