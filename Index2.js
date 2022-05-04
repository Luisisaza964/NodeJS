var mysql      = require('mysql');
var connection = mysql.createConnection({
    host:'b9ilgjwztd4i9xiuvnub-mysql.services.clever-cloud.com',
    user:'ueex9f56vzeulupn',
    password:'5LwCRAQFpXgqxuGAj972',
    database:'b9ilgjwztd4i9xiuvnub'
});
 
connection.connect();
 
connection.query('SELECT * FROM `Tabla_Sueldos`', function (error, results, fields) {
  if (error) console.log('errror!');
  console.log('The solution is: ', results);
});
 
connection.end();