require('express-async-errors');
const express = require('express');
const errorMiddleware = require('./Middlewares/error');
const routes = require('./Routes');

const app = express();
app.use(express.json());

app.use(routes);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);

module.exports = app;
