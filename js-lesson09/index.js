const person = new Object({
    name: 'Иван',
    age: 25,
    greet: function () {
        console.log('Greet');
    }
});
person.greet();

Object.prototype.sayHello = function() {
    console.log('Hello');
}

//person is prototype for lena
const lena = Object.create(person);
lena.name = 'Елена';
lena.sayHello();

//const str = new String('I am string');
const str = 'I am string';
str.sayHello();