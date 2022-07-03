const section = document.getElementById('section');
const height = document.body.clientHeight;
let array = [];

function renderSection(array) {
  clearSection();
  populateSection(array);
}

function populateSection(array) {
  array.forEach((value, index) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'array-element';
    newDiv.setAttribute('value', value);
    newDiv.setAttribute('key', index);
    newDiv.style.height = `${height / 100 * value}px`;
    newDiv.style.width = `${10}px`;
    newDiv.textContent = ' ';
    section.appendChild(newDiv);
  })
}

function clearSection() {
  while (section.firstChild) {
    section.removeChild(section.lastChild);
  }
}

export default function createArray(numberOfElements) {
  array = Array.from({length: numberOfElements}, () => Math.floor(Math.random() * numberOfElements));
  renderSection(array);
}