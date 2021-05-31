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

const timeOutH1 = setTimeout(() => {
    addStylesTo(h1, 'JavaScript', '3rem');
}, 1500);

function addStylesTo(node, text = 'Changed with JS', fontSize) {
    node.textContent = text;
    node.style.color = 'red';
    node.style.textAlign = 'center';
    node.style.background = 'black';
    node.style.padding = '2rem';
    // false: false, 0, '', null, undefined
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}

h1.onclick = (e) => {
    addStylesTo(e.target, 'You\'ve clicked', '3rem');
    clearTimeout(timeOutH1);
}

h1.onmouseover = (ev) => {
    ev.target.style.background = 'grey';
}

h1.onmouseleave = (ev) => {
    ev.target.style.background = 'black';
}

h1.addEventListener('dblclick', (e) => {
    e.target.style.color = 'yellow';
})

const h3 = document.querySelector('h3');
const link = h3.querySelector('a');
link.addEventListener('click',(event)=>{
    event.preventDefault(); // for disabling default behavior of link
    console.log('Click on link', event.target.getAttribute('href'));
})

const sq = document.querySelector('#square');
let x_pos = 200;
let y_pos = 200;
setPosition(sq, x_pos, y_pos);

function setPosition(el, x, y) {
    sq.style.top = y + 'px';
    sq.style.left = x + 'px';
}

window.onkeydown = (ev) => {
    switch (ev.code) {
        case 'ArrowUp': //up
            y_pos -= 50;
            break;
        case 'ArrowDown': //down
            y_pos += 50;
            break;
        case 'ArrowLeft': //left
            x_pos -= 50;
            break;
        case 'ArrowRight': //right
            x_pos += 50;
            break;
        default:
            break;
    }
    console.log(ev.code);
    setPosition(sq, x_pos, y_pos);
}