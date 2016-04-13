export let percentCounter = () => {
  let i = 1;
  let timerId = setInterval(function() {
    console.log(i);
    if (i == 100) clearInterval(timerId);
    i++;
  }, 100);
};