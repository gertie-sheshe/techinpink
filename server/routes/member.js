(function() {
  'use strict';
   // Require controllers
   var Member = require('../controllers/member.js'),
   express = require('express'),
   route = express.Router();

   route.get('/api/save', function(req, res) {
     res.send('Ola');
    //  console.log('Route is working');
   });


   // Export the routes
   module.exports = route;
})();
