const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const User = require('./models/user');
const Todo = require('./models/Todo');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo
    .save()
    .then(doc => res.send(doc))
    .catch(e => res.status(400).send(e));
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
