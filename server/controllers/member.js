(function() {
  'use strict';

  var mongoose = require('mongoose'),
    Member = require('../models/member');

  // Export the methods
  module.exports = {
    // Function to create a new member
    create: function(req, res) {
      // Instance of the model Member
      var member = new Member();
      member.name = req.body.name;
      member.email = req.body.email;

      member.save(function(err, savedMember) {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          return res.status(200).json({
            message: 'Successfully added new user'
          });
        }
      });
    },

    // Function to edit/update
    edit: function(req, res) {
      // Assignment. Learn how to do this
    },

    delete: function(req, res) {
      Member.remove({email: req.params.email}, function(err) {
        if (err) {
          return res.status(500).json({
            err: err || err.errmessage
          });
        } else {
          return res.status(200).json({
            message: 'You have successfully deleted a member'
          });
        }
      });
    },
    
    find: function(req, res) {
      Member.find(function(err, members) {
        if (err) {
          return res.status(500).json({
            err: err || err.errmessage
          });
        } else {
          return res.status(200).json({
            members: members
          });
        }
      });
    }
  };
})();
