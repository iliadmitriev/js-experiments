const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург']
const citiesEurope = ['Париж', 'Берлин', 'Прага']

console.log(...citiesRussia)
console.log(...citiesEurope)

//const allCities = citiesEurope.concat(citiesRussia)
const allCities = [...citiesRussia, 'Вашингтон', ...citiesEurope]
console.log(allCities)

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Yekaterinburg: 2
}
const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Prague: 3,
    Paris: 5
}


console.log({...citiesRussiaWithPopulation})
console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})


// practice
const numbers = [5, 37, 42, 17]
console.log(Math.max.apply(null, numbers))
console.log(Math.max(...numbers));

const divs = document.querySelectorAll('div')
const nodes = [...divs]
// divs is not array, it's NodeList
// many useful Array functions is not available to NodeList, i.e. map
// nodes - it's array
console.log(divs)
console.log(nodes)

// Rest
function sum(a, b, ...rest) { // rest
    // rest consist of all arguments which don't fit in function parameters
    // [3,4,5]
    return a + b + rest.reduce((a, i) => a + i, 0)
}

const nums = [1, 2, 3, 4, 5]
console.log(sum(...nums))

//const a = nums[0]
//const b = nums[1]
const [a, b, ...other] = [...nums]

console.log(a, b, other)


const person = {
    name: 'Иван',
    age: 20,
    city: 'Москва',
    country: 'Россия'
}

const {name, age, ...address} = {...person}
console.log(name, age, address)