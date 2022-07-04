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

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
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
      await replaceChildren(nodeList[minIndex], nodeList[i]);
      nodeList[minIndex].classList.remove('sorted');
    }

  }
}

function replaceChildren(element1, element2) {
  let clonedElement1 = element1.cloneNode(true);
  let clonedElement2 = element2.cloneNode(true);
  element1.parentNode.replaceChild(clonedElement2, element1);
  element2.parentNode.replaceChild(clonedElement1, element2);
  return element1;
}