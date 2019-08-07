const http = require('http');
const fs = require('fs');
const path = require('path');

let i = 1;

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') return res.end('');

  fs.appendFileSync(path.resolve(__dirname, 'data', '1.txt'), `Requested ${i++} times\n`);

  const textData = fs.readFileSync(path.resolve(__dirname, 'data', '1.txt')).toString();

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Docker!!\n' + textData);
});

server.listen(2233, '0.0.0.0', () => console.log('start!'));
