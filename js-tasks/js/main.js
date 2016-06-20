'use strict';

function addLinks() {
  var item = document.querySelectorAll('.tutorial-map__link');
  for (var i = 0; i < item.length; i++) {
    if (+(item[i].href.indexOf('/task/')) === 26 ) {
      return item[i];
    }
  }
}