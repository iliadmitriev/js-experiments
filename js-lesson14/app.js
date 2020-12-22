const person1 = {
    name: 'Иван',
    birthYear: 1993
}

console.dir(person1);

const person = Object.create(
    { // prototype
        calculateAge() {
            console.log(`Age: ${this.age}`)
        }
    }, // object
    {
    name: {
        value: 'Иван',
        enumerable: true, // iterable via for loop
        writable: true, // can be changed
        configurable: true // can be deleted
    },
    birthYear: {
        value: 1993,
        enumerable: false,
        writable: true,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            const newBirthYear = new Date().getFullYear()  - value
            if (newBirthYear > 1900) {
                this.birthYear = new Date().getFullYear() - value
            } else {
                console.error('Birth year is less than 1900')
            }
            return true
        }
    }
})

person.name = 'Сергей'
person.calculateAge()

console.dir(person)

for (let key in person) {
    if (person.hasOwnProperty(key)) { // to get only preperties
        // and exclude methods from iteration
        console.log(`key: ${key} ${person[key]}`)
    }
}

console.log(person.age)