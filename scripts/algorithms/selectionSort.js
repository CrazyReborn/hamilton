import { replaceChildren } from '../replaceChildren.js';
import { sleep } from '../sleep.js';
import { swap } from './mergeSort.js';

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    let minIdex = i;

    for (let i2 = i + 1; i2 < array.length; i2++) {
      if (array[i2] < min) {
        min = array[i2];
        minIdex = i2;
      }
    }
    let ref = min;
    array[minIdex] = array[i];
    array[i] = ref;
  }
}

export async function selectionSortOnNodeList(nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    let min = parseInt(nodeList[i].getAttribute('value'));
    let minIndex = i;
    

    for (let x = i + 1; x < nodeList.length; x++) {
      if (parseInt(nodeList[x].getAttribute('value')) < min) {
        min = parseInt(nodeList[x].getAttribute('value'));
        minIndex = x;
      }
    }
    await sleep(100);
    nodeList[minIndex].classList.add('sorted');
    if (minIndex != i) {
      let tempinx = minIndex;
      swap(nodeList[i], minIndex);
      await replaceChildren(nodeList[minIndex], nodeList[i]);
      nodeList[minIndex].classList.remove('sorted');
    }

  }
}

