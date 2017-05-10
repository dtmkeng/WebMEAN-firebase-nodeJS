var express = require('express');
var app  = express();
var bodyParser = require('body-parser');
module.exports =function(){
app.set('views','./app/views');
app.set('view engine','jade');

app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());
require('../app/routes/index.server.routes')(app);
require('../app/routes/user.server.routes')(app);
return app;
};