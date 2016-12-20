'use strict';

const inputData  = document.querySelector('#input-data');
const buildTable = document.querySelector('#build-table');
const mainTable  = document.querySelector('#main-table');
const mainTbody  = document.querySelector('#main-tbody');

buildTable.addEventListener('click', () => {
  let data = inputData.value;
  let arrLine = data.split(/\n/g);
  let lineCount = arrLine.length;

  for(let i = 0; i < lineCount; i++){
    let tr = document.createElement('tr');
    let cell = arrLine[i].split('	');
    let cellCount = cell.length;
    for (let j = 0; j < cellCount; j++) {
      if (j === 3 ||
          j === 4 ||
          j === 5 ||
          j === 6 ||
          cell.length < 7 ||
          cell[7].length === 0
      ) continue;
      let td = document.createElement('td');
      let item = cell[j];
      td.innerHTML = item;
      tr.appendChild(td);
    }
    mainTbody.appendChild(tr);
  }
  mainTable.appendChild(mainTbody);
});
