const express = require('express')
const app = express()

let id, Nombre1 , Nombre2 ;
let Edad;



app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/id', function (req, res) {
  res.send(id)
  console.log(id); 
})

app.get('/name', function (req, res) {
  res.send(Nombre1)
  console.log(Nombre1); 
})

app.get('/lastName', function (req, res) {
  res.send(Nombre2)
  console.log(Nombre2); 
})

app.get('/old', function (req, res) {
  res.send(Edad);
  console.log(Edad); 
})

app.post('/', function(request, response){
  
  id =  request.body.id
  Nombre1 =  request.body.name
  Nombre2 =  request.body.lastName
  Edad =  request.body.old
  console.log(request.body);      // your JSON

  response.send("Exitoso");    // echo the result back
});



app.listen(3000)

