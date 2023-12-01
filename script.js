'use strict';

document.addEventListener('DOMContentLoaded',function () {
    const header = document.querySelector('header');
});

const mainContainer = document.getElementById('main-container');
console.log('main-container: ', mainContainer);

const listItems = document.querySelectorAll('li');
console.log('list item:', listItems);

const buttons = document.querySelectorAll('button');
console.log('button:', buttons);

buttons[0].addEventListener('click', () => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = 'New Item';
    ul.appendChild(li);
});

buttons[1].addEventListener('click', () => {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li');
    li.innerText = 'Updated Item';
    ul.appendChild(li);
});
  
buttons[2].addEventListener('click', () => {
   const li = document.querySelector('li');
   li.remove();
});

const div = document.getElementById('main-container'); {
    div.style.border = 'solid';
    div.style.padding = '50px';
};

const container = document.querySelector('div');
console.log(container);
container.classList.add('changeColor');

for (let i =0; i <listItems.length; i++) {
    listItems[i].addEventListener('click', () => {
        listItems[i].style.backgroundColor = 'green';
});
} 