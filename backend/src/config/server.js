const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors')


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.use(function (req, res, next) {
    console.log(req)
    next()
  })

server.listen(port, function () {
    console.log(`OftalClinic - BACKEND executando na porta ${port}.`);
});

module.exports = server;