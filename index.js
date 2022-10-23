const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const connectDB = require('./db/db');
const exerciseRouter = require('./routes/exercise.router');
const bodyParser = require('body-parser');
const port = process.env.PORT;
connectDB();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send(`The api is working so far good......`);
});
app.use(exerciseRouter)

app.listen(port, () => {
    console.log(`Your backend server has started}`)
});

module.exports = app;