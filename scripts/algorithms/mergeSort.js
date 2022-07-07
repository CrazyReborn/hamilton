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

export function mergeSortOnNodeList(nodeList) {
  if (nodeList.length < 2) return nodeList;
  let midleIndex = ~~(nodeList.length / 2);

  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < nodeList.length; i++) {
    if (i < midleIndex) {
      leftArray.push(nodeList[i]);
    } else {
      rightArray.push(nodeList[i]);
    }
  }

  leftArray = mergeSortOnNodeList(leftArray);
  rightArray = mergeSortOnNodeList(rightArray);
  nodeList = mergeOnNodeList(leftArray, rightArray, nodeList);

  return nodeList;
}

function mergeOnNodeList(leftArray, rightArray, nodeList) {
  //if (typeof leftArray == 'undefined' && typeof rightArray == 'undefined') return nodeList;
  let index = 0;
  let left = 0;
  let right = 0;
  while (left < leftArray.length && right < rightArray.length) {
    if (getValue(leftArray[left]) <= getValue(rightArray[right])) {

      nodeList[index++] = leftArray[left++];
    } else {
      nodeList[index++] = rightArray[right++];
    }
  }

  while (left < leftArray.length) {
    nodeList[index++] = leftArray[left++];
  }

  while (right < rightArray.length) {
    nodeList[index++] = rightArray[right++];
  }
  return nodeList;
}

function getValue(node) {
  return parseInt(node.getAttribute('value'));
}
