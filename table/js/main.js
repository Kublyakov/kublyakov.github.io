'use strict';

const inputData  = document.querySelector('#input-data');
const buildTable = document.querySelector('#build-table');
const mainTable  = document.querySelector('#main-table');

buildTable.addEventListener('click', () => {
  let data = inputData.value;
  let arrLine = data.split(/\n/g);
  arrLine.forEach((item, i) => {
    let qwe = item.split('	');
    console.log(qwe);
    return qwe;
  });
  mainTable.innerHTML = arrLine;
});

// .split('	')