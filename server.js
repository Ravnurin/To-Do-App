var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./src/server/routes.js');

app.use(express.static(__dirname)); // "/public"
app.use(bodyParser.json());

routes(app);

app.listen(process.env.PORT || 3000);

console.log('Starting hosting of "' + __dirname + '" on port:' + (process.env.PORT == null ? 3000 : process.env.PORT)); //do not change

