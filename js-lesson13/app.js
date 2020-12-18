console.log('Request data')

// setTimeout(() => {
//
//     console.log('prepare data');
//
//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received');
//     }, 2000)
//
// }, 2000)
//

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Prepare data');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    })
})
    .then(clientData => {
        clientData.fromPromise = true
        console.log('Data received', clientData)
        return clientData
    })
    .then(data => {
        console.log('Data modified', data)
    })
    .catch(err => console.error('Ошибка: ', err))
    .finally(() => console.log('Finally'))

const sleep = ms => new Promise(resolve => {
    setTimeout(() => {
        resolve()
    }, ms)
})

// sleep(2000).then(() => console.log('after 2 sec'))
// sleep(3000).then(() => console.log('after 3 sec'))

Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises')
    })

Promise.race([sleep(1000), sleep(2000)])
    .then(() => {
        console.log('Race who\'s first')
    })