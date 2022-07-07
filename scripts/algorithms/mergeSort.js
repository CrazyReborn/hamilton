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
      rightArray[x++] = array[i];
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

  while (l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l++];
    } else {
      array[i] = rightArray[r++];
    }
  }

  while (l < leftSize) {
    array[i++] = leftArray[l++];
  }

  while (r < rightSize) {
    array[i++] = rightArray[r++];
  }
}

const elems = document.getElementsByClassName('array-element');
const sec = document.querySelector('.visualiser');

export async function mergeSortOnNodeList(nodeList) {
  await sleep(5);
  if (nodeList.length < 2) return nodeList;
  let midleIndex = ~~(nodeList.length / 2);

  let leftArray = nodeList.slice(0, midleIndex);
  let rightArray = nodeList.slice(midleIndex);

  leftArray = await mergeSortOnNodeList(leftArray);
  rightArray = await mergeSortOnNodeList(rightArray);
  
  nodeList = await mergeOnNodeList(leftArray, rightArray, nodeList);
  return nodeList;
}

async function mergeOnNodeList(leftArray, rightArray, nodeList) {
  let index = 0;
  let left = 0;
  let right = 0;
  await sleep(100);
  while (left < leftArray.length && right < rightArray.length) {
    if (getValue(leftArray[left]) <= getValue(rightArray[right])) {
      swap(leftArray[left], index);
      nodeList[index++] = leftArray[left++];
    } else {
      swap(rightArray[right], index);
      nodeList[index++] = rightArray[right++];
    }
  }

  while (left < leftArray.length) {
    swap(leftArray[left], index);
    nodeList[index++] = leftArray[left++];
  }

  while (right < rightArray.length) {
    swap(rightArray[right], index);
    nodeList[index++] = rightArray[right++];
  }
  return nodeList;
}

function getValue(node) {
  return parseInt(node.getAttribute('value'));
}

export async function swap(node, index) {
  await sleep(100);
  node.style.order = index;
  await sleep(50);
  return true;
}