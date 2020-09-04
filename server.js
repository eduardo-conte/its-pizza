const express = require("express");
const bodyParser = require("body-parser");
var favicon = require('serve-favicon')
// require('dotenv').config();//Usa o arquivo .env para seta variáveis de ambiente
const app = express();


app.set("view engine", "ejs");

//Middleware
app.use(bodyParser.json());// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true }));// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.static("./public"));
app.use(favicon('./public/images/favicon.png'));

//Database
// const db = require("./app/models");
// db.sequelize.sync();
/*db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/

//Rotas
require("./app/routes/index.routes")(app);//importa as rotas para o app

// error handling
// app.use((err, req, res, next) => {
//   console.log(err)
//   let erro_info = err;
//   res.status(500).render('erro.ejs',{erro_info:erro_info});
// });
//404 Not Found
// app.use(function(req, res, next) {
//   let erro_info = "Página não encontrada!"
//   res.status(404).render('erro.ejs',{erro_info:erro_info});
// });


//Porta e listener
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
