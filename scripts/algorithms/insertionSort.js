import { replaceChildren } from "../replaceChildren.js";
import { sleep } from "../sleep.js";

export function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let x = i;
    while (x > 0 && array[x - 1] > array[x]){
      let temp = array[x];
      array[x] = array[x - 1];
      array[x - 1] = temp;
      x--;
    }
  }
}

export async function insertionSortOnNodeList(nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    let x = i;
    await sleep(100);
    while (x > 0 && parseInt(nodeList[x - 1].getAttribute('value')) > parseInt(nodeList[x].getAttribute('value'))) {
      replaceChildren(nodeList[x], nodeList[x - 1]);
      x--;
    }
  }
}