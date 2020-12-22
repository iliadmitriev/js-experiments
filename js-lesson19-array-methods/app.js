const people = [
    {id: 11, name: 'Иван', job: 'TeamLead', age: 29, budget: 40000},
    {id: 22, name: 'Сергей', job: 'Backend', age: 27, budget: 35000},
    {id: 33, name: 'Виктор', job: 'Frontend', age: 28, budget: 30000},
    {id: 44, name: 'Андрей', job: 'QA', age: 28, budget: 30000}
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

//es6
for (let person of people) {
    console.log(person)
}

//forEach
people.forEach((person, index, peopleArray) => {
    console.log(person)
    console.log(index)
    console.log(peopleArray)
})

//short
people.forEach((p, i) => console.log(i, p))


//Map
const newPeople = people.map(person => {
    return {name: person.name, age: person.age}
})
console.log(newPeople)

//Filter
const filteredPeople = people.filter(p => p.age > 28)
console.log(filteredPeople)

//Reduce
const sumBudget = people.reduce((summary, p) => summary + p.budget, 0)
console.log(sumBudget)

//Find
const el = people.find(person => person.name === 'Сергей')
console.dir(el)

//FindIndex

const ind = people.findIndex(person => person.name === 'Сергей')
console.log(ind)

const budg = people
    .filter(p => p.budget > 30000)
    .map(p => {
        return {
            name: p.name,
            age: p.age,
            budget: p.budget,
            info: `${p.name}, ${p.age}`
        }
    })
    .reduce((summary, p) => summary + p.budget, 0)

console.log(budg)