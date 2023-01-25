const express = require('express');
require('express-async-errors');
const cors = require('cors');
const router = require('./Routes');
const errorMiddleware = require('./Middlewares/error');

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(errorMiddleware);

module.exports = app;
