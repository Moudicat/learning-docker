const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Express!!!'));

app.listen(2233, () => console.log('start!'));
