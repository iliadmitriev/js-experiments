const person = {
    name: 'Илья',
    age: 28,
    isProgrammer: true,
    ['key_' + (1 + 3)]: 'Computed key',
    languages: ['ru', 'en'],
    greet() {
        console.log(`Greetings from ${this.name}`);
    },
    info() {
        console.info('Информация про человека по имени: ' + this.name)
    }
}

person.greet();
console.log(person, person.name);
person.age++;
person.languages.push('de');
console.log(person['age'], person['isProgrammer'], person.languages);
delete person['key_4'];

console.log(person);

const {name: personName, age: personAge = 18, languages: personLanguages} = person;
console.log(personName, personAge, personLanguages);

for (let key in person) {
    // to exclude prototype fields
    if (person.hasOwnProperty(key)) {
        console.log('key:', key);
        console.log('value:', person[key]);
    }
}

const personKeys = Object.keys(person);
console.log(personKeys);

Object.keys(person).forEach((key) => {
    console.log('key:', key);
    console.log('value:', person[key]);
})

person.info();

const logger = {
    keys() {
        console.log('Object keys', Object.keys(this))
    },
    // if use function declaration "function(key) {}"
    // against arrow declaration "(key) => {}"
    // which creates new context, you have to store previous context
    // const self = this or bind it to object
    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log(`"${key}": ${this[key]}`);
        })
        //.bind(this)
    },

    withParams(top = false, between = false, bottom = false) {
        if (top || between) {
            console.log('---------------Start---------------')
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log(`${key}": ${this[key]}`);
            if (between && (index < array.length - 1)) {
                console.log('----------------');
            }
        })
        if (bottom || between) {
            console.log('----------------End----------------')
        }
    }
}

// just bind it but don't run
const bound = logger.keys.bind(person);
bound();

// bind and call immediatelly
logger.keysAndValues.call(person);

logger.withParams.call(person, true, true, true);

logger.withParams.apply(person, [true, true, true]);