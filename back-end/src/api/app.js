const express = require('express');
const router = require('../api/Routes');
const error = require('./Middlewares/errorHandler');

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);
app.use(error);


module.exports = app;
