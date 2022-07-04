import { replaceChildren } from '../replaceChildren.js';
import { sleep } from '../sleep.js';

function bubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
      if (array[x] > array[x + 1]) {
        let temp = array[x + 1];
        array[x + 1] = array[x];
        array[x] = temp;
      }
    }
  }
}

export async function bubleSortOnNodeList(nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    for (let x = 0; x < nodeList.length; x++) {
      if (x + 1 < nodeList.length && parseInt(nodeList[x].getAttribute('value')) > parseInt(nodeList[x + 1].getAttribute('value'))) {
        replaceChildren(nodeList[x], nodeList[x + 1]);
      }
    }
    await sleep(100);
    nodeList[nodeList.length - 1 - i].classList.add('sorted');
  }
}