var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

// Connect to database at Modulus
mongoose.connect('telerik:sofia@novus.modulusmongo.net:27017/ynOmo9ju', function(err) {
  if(err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

// Create Express App
var app = express();

// Include body parser
app.use(bodyParser.json());

// Pull in and include company routes
var companyRoutes = require('./routes/company');
app.use('/company', companyRoutes);

// Set the port for the application and listen
var port = process.env.PORT || 3000;
app.listen(port);

console.log('listening on port ' + port);