const express = require('express');

const server = express();
const footballerRouter = require('../footballers/footballerRoute/route');

server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, Thou faithful developer.',
  }),
);

server.use('/api', footballerRouter);

server.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Bad bad URL mate!',
  }),
);

module.exports = server;
