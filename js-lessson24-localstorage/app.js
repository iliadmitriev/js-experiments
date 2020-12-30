const myNumber = 42


console.log(localStorage.getItem('number'))
localStorage.setItem('number', myNumber.toLocaleString())
console.log(localStorage.getItem('number'))
console.log(localStorage.removeItem('number'))
localStorage.clear()

const person = {
    name: 'Иван',
    age: 20,
    isProgrammer: true,
    address: {
        country: 'РФ',
        city: 'Москва'
    }
}

localStorage.setItem('person', JSON.stringify(person))

const raw = localStorage.getItem('person')
const lsPerson = JSON.parse(raw)
lsPerson.name = 'Виктор'
console.log(lsPerson)

/// =========
// window.onstorage = () => {}
window.addEventListener('storage', ev => {
    console.log(ev)
})