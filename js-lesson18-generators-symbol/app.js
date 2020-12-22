// function* strGenerator() {
//     yield 'H'
//     yield 'e'
//     yield 'l'
//     yield 'l'
//     yield 'o'
// }
//
// const str = strGenerator()

function* numberGen(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

const num = numberGen(7)

const iterator = {
    [Symbol.iterator](n = 10) {
        let i = 0
        return {
            next() {
                if (i < n) {
                    return {value: ++i, done: false}
                } else {
                    return {value: void 0, done: true}
                }
            }
        }
    }
}

for (let k of iterator) {
    console.log(k)
}

function* iter(n=10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (let k of iter(6)) {
    console.log(k)
}