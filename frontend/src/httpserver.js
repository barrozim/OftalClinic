const port = 8080

const express = require('express')

const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('*', function (request, response) {
  //response.writeHead(200, {'Content-Type': 'text/plain'});
  //response.writeContinue(express.static(__dirname + '../public'));
  //response.end(express.static(__dirname + '../public'));
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
})

app.listen(port, '0.0.0.0')
