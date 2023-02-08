const express = require("express");
const hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT

// Uso de Handlerbars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');



// Middlewares
// Servir contenido estatico
app.use(express.static("public")); // similar a indicar que su ruta sera '/' o el homepage

app.get('/', function (req, res) {
  res.render('home',{
    name: 'YOGUI',
    title: 'NodeJS'
  })
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/index.html")
})

app.get("/elements", function (req, res) {
  res.render('elements',{
    name: 'YOGUI',
    title: 'NodeJS'
  })
})

app.get("/generic", function (req, res) {
  res.render('generic',{
    name: 'YOGUI',
    title: 'NodeJS'
  })
})

app.get("*", function (req, res) {
  //   res.send("404 | Page Not Found");
  res.sendFile(__dirname + "/public/404.html");
});


// app.listen(3000)    // permite especificar el puerto escucha
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
