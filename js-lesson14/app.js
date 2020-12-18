// const person = {
//     name: 'Иван',
//     birthYear: 1993
// }

const person = Object.create(
    {
        calculateAge() {
            console.log(`Age: ${this.age}`)
        }
    },
    {
    name: {
        value: 'Иван',
        enumerable: true, // for loop
        writable: true,
        configurable: true // deletable
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return 2020 - this.birthYear
        },
        set(value) {
            this.birthYear = 2020 - value
            return true
        }
    }
})

person.name = 'Сергей'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`key: ${key} ${person[key]}`)
    }
}