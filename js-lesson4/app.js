// 1 Функции
//Function Declaration
function greet(name) {
    console.log(`Привет ${name}!`);
}

greet('Лена');


// Function Expression
const greet2 = function greet2(name) {
    console.log(`Привет ${name}!`);
}

greet2('Маша');
console.log(greet2);
console.dir(greet2);

// 2 Анонимные фукции
let counter = 0;
const interval = setInterval(function () {
    if (counter === 3) {
        clearInterval(interval)
    } else {
        console.log(++counter);
    }
}, 1000);

// 3 Стрелочные функции - ecma6, синтаксис
const arrow = (name, age) => {
    console.log(`Привет ${name}, ${age}!`);
}

arrow('Вася');

const arrow2 = name => console.log(`Привет ${name}!`);

arrow2('Петя');

const pow2 = num => num ** 2;

console.log(pow2(10));

// 4 Параметры по умолчанию
const sum = (a = 0, b = 0) => a + b;

console.log(sum(10));

// 5 rest оператор
function sumAll(...all) {
    console.log(all);
    let result = 0;
    for (let num of all) {
        result += num;
    }
    return result;
}

sumAll(1, 2, 3, 4);

// 6 замыкание

function createMember(name) {
    return function (lastName) {
        console.log(name + ' ' + lastName);
    }
}

const logWithLastName = createMember('Илья');
console.log(logWithLastName('Дмитриев'));