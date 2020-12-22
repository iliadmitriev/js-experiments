// Wrapper

const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
            get: (obj, prop) => prop in obj ? obj[prop] : defaultValue
        }
    )
}

const position = withDefaultValue({x: 24, y: 42}, 0)

console.log(position)
console.log(position.x)
console.log(position.y)
console.log(position.z)

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        // for checking key availability
        has: (obj, p) => (p in obj) && !p.startsWith(prefix),
        // for key iteration via for loop
        ownKeys: (obj) => Reflect.ownKeys(obj)
            .filter(p => !p.startsWith(prefix)),
        // to get property value
        get: (obj, p, receiver) => (p in receiver)
            ? obj[p]
            // undefined
            : void 0
    })
}

const data = withHiddenProps({
    name: 'Иван',
    age: 25,
    _uid: '7A275646-50B5-44C8-91B2-3DD5F9F653C3'
})

for (let key in data) {
    if (data.hasOwnProperty(key)) {
        console.log(`data.${key} = ${data[key]}`)
    }
}

console.log(Object.keys(data))

// Optimization

const userData = [
    {id: 11, name: 'Иван', job: 'TeamLead', age: 29},
    {id: 22, name: 'Сергей', job: 'Backend', age: 27},
    {id: 33, name: 'Виктор', job: 'Frontend', age: 28},
    {id: 44, name: 'Андрей', job: 'QA', age: 28}
]

// not optimal for huge arrays
userData.find(p => p.id === 11)

const index = {}
userData.forEach(i => index[i.id] = i)

// this proxy object wrapper is build for indexing array
const IndexedArray = new Proxy(Array, {
    construct(target, [argArray]) {
        const index = {}
        argArray.forEach(i => index[i.id] = i)
        
        return new Proxy(new target(...argArray), {
            get(arr, p) {
                switch (p) {
                    case 'push':
                        return (item) => {
                            index[item.id] = item
                            arr[p].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[p]
                }
            }
        })
    }
})

const users = new IndexedArray(userData)
console.log(users)

users.push({id: 12, name: 'Михаил', job: 'QA', age: 26})