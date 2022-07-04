import createArray from './createArray.js';
import { selectionSortOnNodeList } from './algorithms/selectionSort.js';

(function main() {
  const rangeInputElement = document.getElementById('range');
  const startButton = document.getElementById('start');
  const algoSelector = document.getElementById('select-algo');
  let selectedAlgo = '';
  let rangeInputValue = 0;

  algoSelector.addEventListener('change', (e) => {
    switch (e.target.value) {
      case '':
        break;
      case 'selection-sort':
        selectedAlgo = 'selection-sort';
        break;
    }
  })

  rangeInputElement.addEventListener('change',(e) => {
    rangeInputValue = e.currentTarget.value;
    createArray(rangeInputValue);
  });

  startButton.addEventListener('click', () => {
    const nodeList = document.getElementsByClassName('array-element');
    switch(selectedAlgo) {
      case 'selection-sort':
        selectionSortOnNodeList(nodeList);
    }
  })
})();


