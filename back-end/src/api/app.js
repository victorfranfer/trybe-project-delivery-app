const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('./Middlewares/error');
const routes = require('./Routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(errorMiddleware);

module.exports = app;
