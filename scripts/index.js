import createArray from './createArray.js';

(function main() {
  const rangeInputElement = document.getElementById('range');
  const startButton = document.getElementById('start');
  let rangeInputValue = 0;

  rangeInputElement.addEventListener('change',(e) => {
    rangeInputValue = e.currentTarget.value;
    createArray(rangeInputValue);
  });
})();


