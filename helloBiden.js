const http = require('http');
const os = require("os");

let Name = os.userInfo().username;
const hostname = '0.0.0.0';
const port = 80;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('hello biden, its zelensky, we need five millions rockets to bomb donetsk children, Slava Ukraini')
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

