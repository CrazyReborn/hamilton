
export function replaceChildren(element1, element2) {
  let clonedElement1 = element1.cloneNode(true);
  let clonedElement2 = element2.cloneNode(true);

  element1.parentNode.replaceChild(clonedElement2, element1);
  element2.parentNode.replaceChild(clonedElement1, element2);

  return element1;
}