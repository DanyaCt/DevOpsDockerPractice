const http = require('http')
const hostname = '0.0.0.0'
const port = 80
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('hello biden, its zelensky, we need five millions rockets to bomb donetsk children, Slava Ukraini')
})
server.listen(port, hostname, () => {

})
