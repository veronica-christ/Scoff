const express = require('express');
const cors = require('cors');

const app = express();


const index = require('./App/routes/index');
const route = require('./App/routes/routers');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
app.use('/api/', route);

module.exports = app;