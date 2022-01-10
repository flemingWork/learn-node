const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("home page")
    }
    if (req.url === '/about') {
        //Blocking Code
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`);
            }
        }
        res.end("About page")
    }
    res.end("page does not exist");
})

server.listen(5000, ()=> {
    console.log('listening on port 5000....');
})