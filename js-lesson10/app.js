function hello() {
    console.log(this)
}

const person = {
    name: 'Иван',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name} and age is ${this.age}`);
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.group(``)
    }
}

const lena = {
    name: 'Елена',
    age: 23
}

//const lenaLogInfo = person.logInfo.bind(lena);
//lenaLogInfo('Engineer', '+7293748932');

//person.logInfo.call(lena, 'iOS developer', '+792312122')

person.logInfo.apply(lena, ['iOS developer', '+792312122'])

/// ============

const arr = [1, 2, 3, 4, 5]

// function multBy(ar, n = 1) {
//     return ar.map( x => x * n )
// }

Array.prototype.multBy = function (n) {
    return this.map( x => x * n )
}

console.log(arr.multBy(3));