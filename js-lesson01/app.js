const myName = 'Elia';
const mySurname = 'Dmitriev';
const age = 31;
const isProgrammer = true;
console.log(myName + ' ' + mySurname);
console.log(isProgrammer);
console.log(age);

// 2 Мутирование
console.log('Имя человека: ' + myName + ', возраст: ' + age);

// const lastName = prompt('Введите фамилию');
// console.log(lastName);

// 3 Операторы
let currentYear = 2020;

const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(--currentYear);
console.log(currentYear++);

// 4 Типы данных
let x;
let bigInt = 19241924124n;

console.log(typeof isProgrammer);
console.log(typeof myName);
console.log(typeof age);
console.log(typeof x);
console.log(typeof {});
console.log(null);
console.log(typeof bigInt);
console.log(typeof Symbol());

// 5 Приоритет операции
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const fullAge = 26;
const birthYear = 1993;
const isFullAge = currentYear - birthYear >= fullAge;
console.log(isFullAge);

// 6 Условные операторы

const courseStatus = 'pending'; // ready, fail, pending

if (courseStatus === 'ready') {
    console.log('Курс уже готов');
} else if (courseStatus === 'pending') {
    console.log('Курс еще готовится');
} else {
    console.log('Курс не получился');
}

/*
const num1 = 42;
const num2 = '42';
const num3 = [42];

console.log(num1 === num2);
console.log(num1 === num3);
*/

const isReady = true;

isReady ? console.log('Все готово') : console.log('Все не готово');

//console.log(false == x);

// 8 Функции
function ageByYear(year) {
    return 2020 - year;
}

function logInfoAbout(name, year) {
    const age = ageByYear(year);
    console.log('Человек по имени ' + name + ' возраст ' + age);
}

logInfoAbout(myName, 1992);

// 9 Массивы
//const cars = new Array('Mazda', 'BMW', 'Mercedes', 'Ford', 'Honda');
const cars = ['Mazda', 'BMW', 'Mercedes', 'Ford', 'Honda'];
console.log(cars[0]);
console.log(cars.length);
cars[5] = 'Porsche';
console.log(cars);

// 10 Циклы
/*
for(let i = 0; i < cars.length; i++) {
    const car = cars[i];
    console.log(car);
}*/

for (let car of cars) {
    console.log(car);
}

// 11 Обьекты
const person = {
    firstName: 'Elia',
    lastName: 'Dmitriev',
    birthYear: 1989,
    languages: ['ru', 'en'],
    isMarried: true,
    greet: function () {
        console.log('greet from ' + this.firstName);
    }
}

console.log(person);
console.log(person.firstName);
console.log(person['lastName']);
const key = 'languages';
console.log(person[key]);
person.greet();

