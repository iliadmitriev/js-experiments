const fib = [1, 1, 2, 3, 5, 8, 13];
const arr = [0, 1, 4.23, true, '12', null, {},];

console.log(fib);
console.log(arr);

const cars = ['Ford', 'Mazda', 'BMW', 'Honda'];
cars[cars.length] = 'Nissan';
console.log(cars);

cars.push('Porsche');
console.log(cars);

cars.unshift('Toyota');
console.log(cars);

const firstItem = cars.shift();
console.log(firstItem)
console.log(cars);

const lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

cars.reverse()
console.log(cars)

console.log(cars.indexOf('BMW'));
console.log(cars.indexOf('Audi'));

const people = [
    {name: 'Илья', budget: 5000},
    {name: 'Андрей', budget: 4000},
    {name: 'Евгений', budget: 6000}
];

const index = people.findIndex(function (person) {
    return person.budget === 4000;
})
console.log(people[index]);

const person = people.find(person => person.budget === 6000);
console.log(person);

console.log(cars.includes('Mazda'));

const upperCaseCars = cars.map(car => car.toLocaleUpperCase());
console.log(upperCaseCars);

const pow2 = num => num ** 2;
const pow2Fib = fib.map(pow2);
const pow2FibFiltered = pow2Fib.filter(num => num > 20);
console.log(pow2Fib);
console.log(pow2FibFiltered);

const reducer = (accumulator, person) => accumulator + person.budget;
console.log(people
    .filter(person => person.budget > 4000)
    .reduce(reducer, 0));

// Задача 1
const text = 'Привет, ребята! мы узучаем javascript'
const reverseText = text.split('').reverse().join('');
console.log(reverseText);
