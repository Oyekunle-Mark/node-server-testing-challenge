const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, Thou faithful developer.',
  }),
);

server.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Bad bad URL mate!',
  }),
);

module.exports = server;
