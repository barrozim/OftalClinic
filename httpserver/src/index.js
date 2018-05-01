const port = 8080

const express = require('express')

const path = require('path')

const app = express()

app.use(express.static(__dirname + '/public'))




app.get('*', function (request, response) {

  console.log(path.resolve(__dirname, 'public', 'index.html'))


  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})


app.listen(port, '0.0.0.0')
