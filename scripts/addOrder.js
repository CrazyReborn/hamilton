export function addOrder(nodeList) {
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.order = i;
  }
}