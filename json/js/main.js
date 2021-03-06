'use strict';

var container = document.getElementById('container');
var ENTER = 13;

var Page = {
  onScroll: function () {
    var scrolled = window.pageYOffset;
    var scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );

    if (scrolled === scrollHeight - document.documentElement.clientHeight) {
      console.log(Themes.offset());
      Themes.getThemes().then(function (data) {
        themesLoop(data);
      });
    }
  }
};

var Themes = {
  OFFSET: 0,
  offset: function () {
    return this.OFFSET += 20;
  },
  getThemesUrl: function () {
    return '//newth.orbitum.com/api/viewtheme.php?std_out=20&oft='+ this.OFFSET +'&cat=3';
  },
  getThemes: function () {
    return fetch(Themes.getThemesUrl())
      .then(
        function(response) {
          return response.json();
        }
      )
      .catch(function() {
        alert('Конец!');
      });
  }
};

function themesLoop(data) {
  for (var i = 0; i < data.themes.length; i++) {
    var item = data.themes[i];
    var itemLink = item.category_id + '/' + item.id;
    themesLoop.isEvent = false;

    var themeItem = `
              <div class="theme-item">
                <div href="//newth.orbitum.com/#!cat/${itemLink}" class="image-link">
                  <img src="${item.grid_preview}" alt="${item.full_title}" class="theme-image" data-bg="${item.list_preview}">
                </div>
                <div href="//newth.orbitum.com/#!cat/${itemLink}" class="title-link">
                  <div class="theme-title" data-fullTitle="${item.full_title}">
                    ${item.title}
                  </div>
                </div>
                <div class="rating">Рейтинг темы: ${item.rating}</div>
                <div class="install-count">Количество установок: ${item.install_cnt}</div>
              </div>
              `;

    container.insertAdjacentHTML('beforeEnd', themeItem);
  }
}

Themes.getThemes().then(function (data) {
  themesLoop(data);
});

window.onscroll = Page.onScroll;

function addBackground() {
  container.addEventListener('click', function(e) {
    var target = e.target;
    if (target.className === 'theme-image') {
      var link = target.getAttribute('data-bg');
      document.body.style.background = `url('${link}') no-repeat fixed center top`;
      document.body.style.backgroundSize = 'cover';
    }
  });
}

addBackground();

function createInput(fullTitle) {
  var input = document.createElement('input');
  input.className = 'input-title';
  input.value = fullTitle;
  return input;
}

function addInput() {
  container.addEventListener('click', function(e) {
    var target = e.target;
    if (target.className === 'theme-title') {
      var fullTitle = target.getAttribute('data-fullTitle');
      var elem = target.insertBefore(createInput(fullTitle), null);
      elem.focus();
      elem.onblur = function () {
        // event.keyCode === ENTER && target.value > 0
        target.innerHTML = elem.value;
      };
    }
  });
}

function saveTitle() {
    elem.onblur = function () {
    // event.keyCode === ENTER && target.value > 0
    console.log(changeTitle());
    target.removeChild(elem);
    target.innerHTML = elem.value;
  };
}

addInput();