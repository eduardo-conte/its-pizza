module.exports = app => { //Define as rotas para um app e utiliza os métodos crud do controller
    var router = require("express").Router();
  
    //Redirect
    router.get("/", (req, res) => {
      res.render("index.ejs");
    });
  
  
    app.use('/', router);
  };