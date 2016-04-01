
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');

var config = require('./config');

module.exports = function() {
  var app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
  }));

  require('./passport.js')(app);
  require('../features/auth/auth.routes.js')(app);

  // THIS WILL BE ANGULAR APP
  // needs to come after setting the rendering engine
  app.use(express.static('./core/client'));

  return app;
};
