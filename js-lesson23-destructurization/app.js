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