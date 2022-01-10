const http = require('http');

const server = http.createServer();


// const server = http.createServer((req, res) => {
//     res.end("Hello World")
// })
server.on('request', (req, res) => {
    res.end("Hello Worldly World")
})


server.listen(5000);