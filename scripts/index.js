import createArray from './createArray.js';
import { selectionSortOnNodeList } from './algorithms/selectionSort.js';

(function main() {
  const rangeInputElement = document.getElementById('range');
  const startButton = document.getElementById('start');
  let rangeInputValue = 0;

  rangeInputElement.addEventListener('change',(e) => {
    rangeInputValue = e.currentTarget.value;
    createArray(rangeInputValue);
  });

  startButton.addEventListener('click', () => {
    const nodeList = document.getElementsByClassName('array-element');
    selectionSortOnNodeList(nodeList);
  })
})();


