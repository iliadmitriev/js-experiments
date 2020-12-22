const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

// delay(2000).then(() => {
//     console.log('times had passed')
// })

const url = 'https://jsonplaceholder.typicode.com/todos/'

/*
function fetchTodos() {
    console.log('Fetch started')
    return delay(2000)
        .then(() => fetch(url))
        .then((response) => response.json())
}

fetchTodos()
    .then(data => {
        console.log('Data: ', data)
    })
    .catch(e => console.error(e))
 */

async function fetchAsyncTodos() {
    console.log('Fetching data started ...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data', data)
    } catch (e) {
        console.error(e)
    }
}

fetchAsyncTodos()
