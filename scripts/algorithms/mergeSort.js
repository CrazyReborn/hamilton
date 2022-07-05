import { sleep } from "../sleep.js";
import { replaceChildren } from "../replaceChildren.js";

export function mergeSort(array) {

  let length = array.length;

  if (length <= 1) return;

  let middle = ~~(length / 2);
  let leftArray = new Array(middle);
  let rightArray = new Array(length - middle);
  let x = 0;
  for (let i = 0; i < length; i++) {
    if (i < middle) {
      leftArray[i] = array[i];
    } else {
      rightArray[x] = array[i];
      x++;
    }
  }
  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, array);
}

function merge(leftArray, rightArray, array) {
  let leftSize = array.length / 2;
  let rightSize = array.length - leftSize;
  let i = 0, l = 0, r = 0;

  while(l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l];
      l++;
    } else {
      array[i] = rightArray[r];
      r++;
    }
    i++;
  }

  while(l < leftSize) {
    array[i] = leftArray[l];
    l++;
    i++;
  }

  while(r < rightSize) {
    array[i] = rightArray[r];
    r++;
    i++;
  }
}

const elems = document.getElementsByClassName('array-element');

export async function mergeSortOnNodeList(nodeList) {
  if (nodeList.length <= 1) return;

  let midIndex = Math.floor(nodeList.length / 2);

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < nodeList.length; i++) {
    if (i < midIndex) {
      leftArray.push(nodeList[i]);
    } else {
      rightArray.push(nodeList[i]);
    }
  }
  mergeSortOnNodeList(leftArray);
  mergeSortOnNodeList(rightArray);
  nodeList = mergeOnNodeList(leftArray, rightArray, nodeList);
  let a = 0;
  if (nodeList.length == elems.length) {
    
    for (let ele of elems) {
      await sleep(50);
      ele != nodeList[a] ? replaceChildren(ele, nodeList[a]) : '';
      a++;
    }
  }
  return nodeList; 
}

function mergeOnNodeList(leftArray, rightArray, nodeList) {

  let leftLength = leftArray.length;
  let rightLength = rightArray.length;


  let i = 0;
  let l = 0;
  let r = 0;

  while(l < leftLength && r < rightLength) {
    if (parseInt(leftArray[l].getAttribute('value')) < parseInt(rightArray[r].getAttribute('value'))) {
      nodeList[i] = leftArray[l++];
    } else {
      nodeList[i] = rightArray[r++];
    }
    i++;
  }

  while(leftLength != -1 && l < leftLength ) {
    nodeList[i] = leftArray[l++];
    i++;
  }
  while(rightLength != -1 && r < rightLength) {
    nodeList[i] = rightArray[r++];
    i++;
  }

  return nodeList;
}