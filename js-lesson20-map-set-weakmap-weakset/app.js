const obj = {
    name: 'Иван',
    age: 26,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Иван'],
    ['age', 26],
    ['job', 'Fullstack']
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

// map:
// - keys could be any objects, not just strings
const map = new Map(entries)

console.log(map.get('job'))

map
    .set('new_field', 42)
    .set(obj, 'Value of obj')
    .set(NaN, 'NaN ??')

console.log(map.get)

// delete key
map.delete('job')

// check if key exists
console.log(map.has('job'))

// count of keys
console.log(map.size)

// delete all entries
//map.clear()
console.log(map.size)

// iterate map entries with for .. of
for (let entry of map.entries()) {
    console.log(entry)
}

// iterate map keys and values with for .. of
for (let [key, value] of map) {
    console.log(key, value)
}

// iterate map values with for .. of using MapIterator
for (let val of map.values()) {

}

// iterate map keys with for .. of using MapIterator
for (let val of map.keys()) {

}

// iterate map keys and values with forEarh method
map.forEach((value, key, map1) => {

})

// expand map into array
const array = [...map]

const mapObj = Object.fromEntries(map.entries())

console.log(mapObj)

const users = [
    {name: 'Elena'},
    {name: 'Alex'},
    {name: 'Irina'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[2]))


const set = new Set(['a', 'b', 'c', 'd', 'a'])
console.log(set)

// Check existence of element
console.log(set.has('a'))

// Get set size
console.log(set.size)

// delete element
console.log(set.delete('b'))

// clear set
console.log(set.clear(), set.size)

// Add element
set.add('e').add('c').add('a')

// Get all keys and entries via SetIterator
console.log(set.keys(), set.entries())

// Loop all values of set
for (let value of set) {
    console.log(value)
}

function uniqValues(array) {
    return Array.from(new Set(array))
}

console.log(uniqValues([1,2,3,1,2,3]))

// Weak map
let testObj = {name: 'weakmap'}
// const arr = [testObj]
// testObj = null
// // testObj still exists in array arr
// console.log(arr)

const weakMap = new WeakMap([
    [testObj, 'testObj data']
])
//get set delete has
console.log(weakMap.get(testObj))
testObj = null

console.log(weakMap.get(testObj))


const cache = new WeakMap()
function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}


// WeakMap cache example
let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

console.log(cache.has(lena))
console.log(cache.has(alex))
