'use strict';

const inputData  = document.querySelector('#input-data');
const buildTable = document.querySelector('#build-table');
const mainTable  = document.querySelector('#main-table');

buildTable.addEventListener('click', () => {
  let data = inputData.value;
  let arr = data.split(/\n/g);
  console.log(arr);
  mainTable.innerHTML = arr;
});