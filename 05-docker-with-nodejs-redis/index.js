const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient(6379, 'localhost');

client.set('hello', 'nodejs+redis');

app.get('/', (req, res) => {
  client.get('hello', (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(`Hello ${result}!!!`);
    }
  });
});

app.listen(22333, () => console.log('start!'));
