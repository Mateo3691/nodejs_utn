let express = require('express');
let mongodb = require('./config/mongodb');
let indexRouter = require('./routes/index');

let app = express();

app.use(express.json());
app.use('/', indexRouter);
// app.use('/users', usersRouter);

module.exports = app;
