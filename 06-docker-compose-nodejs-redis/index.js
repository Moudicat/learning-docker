const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient(process.env.REDIS_URL);

client.set('hello', 'docker-compose nodejs redis');

app.get('/', (req, res) => {
  client.get('hello', (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(`Hello ${result}!!! env: ${JSON.stringify(process.env)}`);
    }
  });
});

app.get('/redis/:key', (req, res) => {
  const { key } = req.params;
  const value = req.query;
  client.set(key, JSON.stringify(value));
  return res.send('OK!');
});

app.get('/:key', (req, res) => {
  const { key } = req.params;

  client.get(key, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(`Result: ${result}`);
    }
  });
});

app.listen(2233, () => console.log('start!'));
