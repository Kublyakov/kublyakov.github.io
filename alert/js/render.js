import topInfoTpl from './templates/top-info';
import progressbarTpl from './templates/progressbar';
import virusInfoTpl from './templates/virus-info';
import buttonsTpl from './templates/buttons';
import * as utils from './utils';

let getScreenHeight = () => {
  return document.documentElement.clientHeight;
};
let newData = {...utils.appData, height: getScreenHeight()};

let renderTpl = (tplFn, newData) => {
  console.log(newData);
  return tplFn(newData);
};

export let render = () => {
  let tpls = [topInfoTpl, progressbarTpl, virusInfoTpl, buttonsTpl].map(item => renderTpl(item, newData));
  return tpls.join('');
};