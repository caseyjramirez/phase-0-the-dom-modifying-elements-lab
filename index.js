// Write your code here!
const d = document;

const main = d.querySelector('#main');
main.remove();

const newHeader = d.createElement('h1');
newHeader.id = "victory"
newHeader.textContent = 'Casey is the champion'

d.append(newHeader);
