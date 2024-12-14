const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');


const userRoutes = require('./routes/routes');

const app = express();


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

app.use(userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Listening port ${PORT}`)
});

  module.exports = app