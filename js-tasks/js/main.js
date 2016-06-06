'use strict';

var item = document.getElementsByClassName('tutorial-map__link');

for (var i = 0; i < item.length; i++) {
  if (+(item[i].href.indexOf('/task/')) === 26 ) {
    console.log(item[i].href);
  }
}