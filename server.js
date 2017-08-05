var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var sequelize = require("sequelize");
var mysql2 = require("mysql2");
var PORT = process.env.PORT || 3000;
var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: false }));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));



//setup handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");

app.get('/',function(req,res){
  res.render('index');
})

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
