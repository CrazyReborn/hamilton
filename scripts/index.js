import createArray from './createArray.js';

(function main() {
  const rangeInputElement = document.getElementById('range');
  let rangeInputValue = 0;

  rangeInputElement.addEventListener('change',(e) => {
    rangeInputValue = e.currentTarget.value;
    console.log('1');
    createArray(rangeInputValue);
  });
})();


