import data from './data.json';

const colors = ['red', 'yellow', 'teal', 'blue'];

const items = document.querySelector('.summary-items');

data.forEach((item, i) => {
  // add wrapper
  const itemDiv = items.appendChild(document.createElement('div'));
  itemDiv.className = `summary-item ${colors[i]}`;

  //add img
  const image = itemDiv.appendChild(document.createElement('img'));
  image.setAttribute('src', item.icon);
  image.setAttribute('alt', item.category);

  //add p
  const p = itemDiv.appendChild(document.createElement('p'));
  p.textContent = item.category;

  //add span & bold
  const span = itemDiv.appendChild(document.createElement('span'));
  const bold = document.createElement('b');
  bold.textContent = item.score;
  span.textContent = ' / 100';
  span.insertAdjacentElement('afterbegin', bold);
});
