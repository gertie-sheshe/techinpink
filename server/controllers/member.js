(function() {
  'use strict';

  var mongoose = require('mongoose'),
    Member = require('../models/member');

  // Export the methods
  module.exports = {
    // Function to create a new member
    create: function(req, res) {
      // Instance of a model
      var member = new Member();
      member.name = req.body.name;
      member.save(function(err, savedMember) {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.status(200).send(savedMember);
        }
      });
    },

    // Function to edit/update
    edit: function(req, res) {
      // Assignment. Learn how to do this
    },

    delete: function() {},
    find: function() {}
  };
})();
