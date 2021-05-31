const requestUrl = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method = 'GET', url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')
        
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }
        
        xhr.onerror = () => {
            reject(xhr.response)
        }
        
        xhr.send(body)
    })
}

sendRequest('GET', requestUrl)
    .then(data => {
        const res = document.querySelector('#result')
        res.innerHTML = JSON.stringify(data, void 0, 2)
        console.log(data)
    })
    .catch((err) => {
        console.error(err)
    })

const body = {
    name: 'Иван',
    age: 26
}

sendRequest('POST', requestUrl, JSON.stringify(body))
    .then(data => console.log(data))
    .catch(err => console.log(err))


// Fetch

function sendFetchRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body) ? (body) : null,
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            return response.json().then(error => {
                const e = new Error('Что то пошло не так')
                e.data = error
                throw e
            })
        }
    })
}

sendFetchRequest('GET', requestUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err));

sendFetchRequest('POST', requestUrl)
    .then(data => console.log(data))
    .catch(err => console.log(err))
