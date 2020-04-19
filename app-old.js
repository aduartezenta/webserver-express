const http = require('http')

http.createServer((req, res) => {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        let response = {
            firstName: 'Adrian',
            lastName: 'Duarte'
        }
        res.write(JSON.stringify(response))
        res.end()
    })
    .listen(8080)

console.log('Listening in 8080');