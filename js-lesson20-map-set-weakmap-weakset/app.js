const obj = {
    name: 'Иван',
    age: 26,
    job: 'Fullstack'
}

const entries = [
    ['name','Иван'],
    ['age',26],
    ['job', 'Fullstack']
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

const map = new Map(entries)

console.log(map)