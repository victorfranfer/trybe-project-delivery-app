const express = require('express');
import router from '../api/Routes/index';
import error from './Middlewares/errorHandler';

const app = express();

app.use(express.json());
app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);
app.use(error);


module.exports = app;
