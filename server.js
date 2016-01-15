var express = require('express');
var app = express();

// Define routes
require('./app/routes')(app);

// To serve up resources (css,js,etc)
app.use(express.static(__dirname));

// Starts listening on port
app.listen(process.env.PORT || 8080);
