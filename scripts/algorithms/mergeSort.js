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

  while(l < leftSize && r < rightSize) {
    if (leftArray[l] < rightArray[r]) {
      array[i] = leftArray[l++];
    } else {
      array[i] = rightArray[r++];
    }
  }

  while(l < leftSize) {
    array[i++] = leftArray[l++];
  }

  while(r < rightSize) {
    array[i++] = rightArray[r++];
  }
}

const elems = Array.from(document.getElementsByClassName('array-element'));
const sec = document.querySelector('.visualiser');

export function mergeSortOnNodeList(nodeList) {

  if (nodeList.length < 2) return nodeList;
  let midleIndex = ~~(nodeList.length/2);

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
  return nodeList = mergeOnNodeList(leftArray, rightArray, nodeList);
}

function mergeOnNodeList(leftArray, rightArray, nodeList) {
  if (typeof leftArray == 'undefined' && typeof rightArray == 'undefined') return nodeList;
  let index = 0;
  let left = 0;
  let right = 0;
  while(left < leftArray.length && right < rightArray.length) {
    if (getValue(leftArray[left]) <= getValue(rightArray[right])) {
      //nodeList[index++] = leftArray[left++];
      c(leftArray[left], nodeList[index]);
      index++;
      left++;
    } else {
      //nodeList[index++] = rightArray[right++];
      c(rightArray[right], nodeList[index]);
      index++;
      right++;
    }
  }

  while(left < leftArray.length) {
    //nodeList[index++] = leftArray[left++];
    c(leftArray[left], nodeList[index]);
    index++;
    left++;
  }

  while(right < rightArray.length) {
    //nodeList[index++] = rightArray[right++];
    c(rightArray[right], nodeList[index]);
    index++;
    right++;
  }

  console.log(nodeList);
  return nodeList;
}

function getValue(node) {
  return parseInt(node.getAttribute('value'));
}

function c(el1, el2) {
  let found1 = Array.from(sec.childNodes).find((e) => e == el1);
  let found2 = Array.from(sec.childNodes).find((e) => e == el2);
  console.log(found1);
  console.log(found2);
  found1.parnetNode.replaceChild(el2, found1);
  found2.parnetNode.replaceChild(el1, found2);
}