const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/spanish', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/frances', function (req, res) {
  res.send('Salut Monde')
})

app.get('/griego', function (req, res) {
  res.send('Ciao mondo')
})

app.get('/japones', function (req, res) {
  res.send('こんにちは世界')
})



app.listen(3000)

