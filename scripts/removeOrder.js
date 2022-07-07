export function removeOrder(nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].removeProperty('order');
  }
}