const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!')
})

server.listen(2233, '127.0.0.1', () => console.log('start!'))