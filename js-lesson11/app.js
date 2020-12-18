// closure - замыкание

function createCalcFunction (n) {
    return function (num) {
        console.log( num * n )
    }
}

const calc = createCalcFunction(1000);

calc(42);
calc(33);


function createIncrementer(n) {
    return function (num) {
        return n + num;
    }
}

const addOne = createIncrementer(1);
const addTen = createIncrementer(10);

console.log(addOne(10));
console.log(addOne(41));

console.log(addTen(10));
console.log(addTen(41));


function urlGenerator(tld){
    return function (url) {
        return `https://${url}.${tld}`
    }
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('netflix'));
console.log(ruUrl('yandex'));
console.log(ruUrl('mail'));

/*

Написать свою функцию bind
Пример работы:

bind(person1, logPerson)
bind(person2, logPerson)

*/

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'}
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

function myBind(context, func) {
    return function(...paramsArr) {
        return func.apply(context, paramsArr);
    }
}

myBind(person1,logPerson)();
myBind(person2,logPerson)();