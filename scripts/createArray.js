const section = document.getElementById('section');
const height = document.body.clientHeight;
let array = [];

function populateSection(array) {
  clearSection();
  array.forEach((value) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'array-element';
    newDiv.setAttribute('value', value);
    newDiv.style.height = `${height / 50 * value}px`;
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
  array = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
  populateSection(array);
}