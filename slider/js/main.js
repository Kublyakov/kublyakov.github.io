'use strict';

var mainContainer = document.querySelector('.slider-container');
var itemsContainer = document.querySelector('.slider-items');
var item = document.querySelectorAll('.slide-item');
var controls = document.querySelector('.slider-controls');
var rightArrow = document.querySelector('.right-arrow');
var leftArrow = document.querySelector('.left-arrow');
var position = 0;

// Функция рассчета длины контейнера. Но можно не считать, а задать большую ширину в стилях.
function sliderWidth() {
  var containerWidth = 0;
  for (var i = 0; item.length > i; i++) {
    var itemWidth = item[i].offsetWidth;
    containerWidth = containerWidth + itemWidth;
  }
  return containerWidth;
}

itemsContainer.style.width = sliderWidth() + 'px';

function activeSlide() {
  var dot = document.querySelectorAll('.dot');
  item[0].classList.add('active');
  dot[0].classList.add('active');
}

// Создание точек навигации
function createDots() {
  var dotsContainer = document.querySelector('.slider-dots');
  for (var i = 0; item.length > i; i++) {
    var dot = document.createElement('div');
    dot.className = dot;
    dotsContainer.insertAdjacentHTML('afterBegin', '<div class="dot"></div>');
  }
}

createDots();

controls.addEventListener('click', function (e) {
  var target = e.target;
  var width = mainContainer.offsetWidth;
  if (target === rightArrow) {
    if ((sliderWidth() - width) > position) {
      position = position + width;
      itemsContainer.style.transform = 'translateX(-' + position + 'px)';
    }
    else {
      position = 0;
      itemsContainer.style.transform = 'translateX(-' + position + 'px)';
    }
  }
  if (target === leftArrow) {
    if ((sliderWidth() - width) >= position && position > 0) {
      position = position - width;
      itemsContainer.style.transform = 'translateX(-' + position + 'px)';
    }
    else {
      position = (sliderWidth() - width);
      itemsContainer.style.transform = 'translateX(-' + position + 'px)';
    }
  }
});