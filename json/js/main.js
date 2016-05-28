'use strict';

var link = '//newth.orbitum.com/api/viewtheme.php?std_out=20&oft=0&cat=3';

fetch(link)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        var container = document.getElementById('container');

        function themesLoop() {
          for (var i = 0; i < data.themes.length; i++) {
            var item = data.themes[i];
            var itemLink = item.category_id + '/' + item.id;

            var themeItem = `
              <div class="theme-item">
                <a href="//newth.orbitum.com/#!cat/${itemLink}" class="image-link">
                  <img src="${item.grid_preview}" alt="${item.full_title}">
                </a>
                <a href="//newth.orbitum.com/#!cat/${itemLink}" class="title-link">
                  <h2 class="theme-title">
                    ${item.title}
                  </h2>
                </a>
                <div class="rating">Рейтинг темы: ${item.rating}</div>
                <div class="install-count">Количество установок: ${item.install_cnt}</div>
              </div>
              `;
            container.insertAdjacentHTML('beforeEnd', themeItem);
          }
        }

        themesLoop();

        window.onscroll = function() {
          var scrolled = window.pageYOffset;
          var scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );

          if (scrolled === scrollHeight - document.documentElement.clientHeight) {
            link = '//newth.orbitum.com/api/viewtheme.php?std_out=20&oft=20&cat=3';
            fetch(link);
            themesLoop();
          }
        };

      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
