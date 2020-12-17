const h1 = document.getElementById('welcome');

//Устарело
//const h2 = document.getElementsByTagName('h2')[0]; //by tag
//const h2 = document.getElementsByClassName('heading2'); //by class

// only one first element
//const h2 = document.querySelector('h2') //by tag
//const h2 = document.querySelector('.heading2') //by class
const h2 = document.querySelector('#heading2-id') //by id

console.dir(h2);

// all elements matching selector
const h2all = document.querySelectorAll('h2');

console.dir(h2all);

setTimeout(() => {
    addStylesTo(h1, 'JavaScript');
}, 1500);

function addStylesTo(node, text = 'Changed with JS') {
    node.textContent = text;
    node.style.color = 'red';
    node.style.textAlign = 'center';
    node.style.background = 'black';
    node.style.padding = '2rem';
}

