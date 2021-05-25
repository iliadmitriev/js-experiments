function calcValues(a, b) {
    return [
        a + b,
        undefined,
        a * b,
        a / b
    ]
}

const [sum, sub = 'Вычитания нет', ...other] = calcValues(42, 10)
//const sum = result[0]
//const sub = result[1]
// const [sum, sub] = result

console.log(sum, sub, other)

let x = 42, y = 24;
// swap values
([x, y] = [y, x])
console.log(x, y)

const person = {
    name: 'Иван',
    age: 20,
    address: {
        country: 'Россия',
        city: 'Москва'
    },

    greet: function () {
        console.log(`${this.name} is greeting you`)
    },

    greetArrow: () => {
        console.log(`${this.name} is greeting you by arrow`)
    }
}

const {
    name: personName,
    age: personAge,
    car: personCar = 'нет автомобиля',
    address: {
        city: personCity,
        country: personCountry
    }
} = person

const {name: firstName, ...info} = person

console.log(personName, personAge, personCar, personCity, personCountry)
console.log(firstName, info)

function logPerson({name: firstName, age: personAge}) {
    console.log(firstName + ' ' + personAge)
}

logPerson(person)

const {greet: greetPerson, greetArrow: greetArrow} = person

// this is undefined
greetPerson()
// this is a link to a person
const bindGreet = greetPerson.bind(person)
bindGreet()

// this is undefined
greetArrow()
// this is undefined
const bindGreetArrow = greetArrow.bind(person)
bindGreetArrow()