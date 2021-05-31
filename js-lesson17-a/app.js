const person = Object.create(
    {},
    {
        name: {
            value: 'Иван',
            enumerable: true,
            writable: true,
            configurable: true
        },
        age: {
            value: 25,
            enumerable: true,
            writable: true,
            configurable: true
        },
        job: {
            value: 'Fullstack',
            enumerable: true,
            writable: true,
            configurable: true
        },
        birthYear: {
            get() {
                return 2020 - this.age
            }
        }
    })

//object proxy
const op = new Proxy(person, {
    get(target, prop) {
        console.log('Getting prop ${prop}', prop)
        if (!(prop in target)) {
            return prop
                .split('_')
                .map(p => target[p])
                .join(', ')
        } else {
            return target[prop]
        }
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
        }
        throw new Error(`No ${prop} field in ${target}`)
    },
    has(target, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, p) {
        console.log(`Deleting ${p} from ${target}.. `)
        delete target[p]
        return this.has(target, p)
    }
})


// function proxy
const logfunc = text => `Log: ${text}`

const fp = new Proxy(logfunc, {
    apply(target, thisArg, argArray) {
        console.log('Target:', target)
        console.log('thisArg:', thisArg)
        console.log('argArray:', argArray)
        
        return target.apply(thisArg, argArray)
    }
})

//class proxies

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, argArray, newTarget) {
        console.log('Construct ...')
        return new Proxy(new target(...argArray), {
            get(t, prop) {
                console.log(`getting property ${prop}`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Maxim', 30)
