const express = require('express')
const mysql = require('mysql')
const app = express()
const connection = mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'Facebook.2019',
  database:'financiax'
})



app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/', function (req, res) {
  connection.connect((err)=>{
    if(err) throw err
    console.log('Succeful')
  })
  connection.query('SELECT * FROM tabla_sueldos',(err,rows)=>{
    console.log(rows)
  })
  connection.end()
})

app.listen(3000)


