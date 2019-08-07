const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Docker!!')
})

server.listen(2233, '0.0.0.0', () => console.log('start!'))