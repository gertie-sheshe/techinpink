(function() {
  'use strict';

  // Require dependencies that you will need. Dependencies perform a particular
  // function in your application

  // Express is a javascript routing framework.
  var express = require('express'),

  // Mongoose helps to connect to MongoDB
  mongoose = require('mongoose'),

  //Define the app
  app = express(),

  // Define your port
  port = 3030,

  // Require the config file
  config = require('./config/config');

  // Connect to the database
  mongoose.connect(config.db, function(err) {
    if (err) {
      console.log('Could not connect to database');
    } else {
      console.log('Connected to database techinpink');
    }
  });

  // Start up the server
  app.listen(port, function(err) {
    if (err) {
      console.log('Cannot connect to port');
    } else {
      console.log('Connected on port ' + port);
    }
  });


})();
