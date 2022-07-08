import createArray from './createArray.js';
import { selectionSortOnNodeList } from './algorithms/selectionSort.js';
import { bubbleSortOnNodeList } from './algorithms/bubbleSort.js';
import { insertionSortOnNodeList } from './algorithms/insertionSort.js';
import { mergeSortOnNodeList } from './algorithms/mergeSort.js';
import { addOrder } from './addOrder.js';
import { removeOrder } from './removeOrder.js';

(function main() {
  const rangeInputElement = document.getElementById('range');
  const startButton = document.getElementById('start');
  const algoSelector = document.getElementById('select-algo');
  let selectedAlgo = '';
  let rangeInputValue = 0;

  algoSelector.addEventListener('change', (e) => {
    selectedAlgo = e.target.value;
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
        break;
      case 'bubble-sort':
        bubbleSortOnNodeList(nodeList);
        break;
      case 'insertion-sort':
        insertionSortOnNodeList(nodeList);
        break;
      case 'merge-sort':
        addOrder(nodeList);
        console.log(mergeSortOnNodeList(Array.from(nodeList), 0, nodeList.length - 1));
    }
  })
})();

//let arr = [2,5,1,1,0,7,12,3,22,4,5,17];