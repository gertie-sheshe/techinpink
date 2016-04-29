(function() {
  'use strict';

  var mongoose = require('mongoose'),
    Member = require('../models/member');

  // Export the methods
  module.exports = {
    // Function to create a new member
    create: function(req, res) {
      // Check if Email exists
      Member.findOne(req.body.email, function(err, result) {
        if (result) {
          return res.status(409).json({
            message: 'This Email already exists'
          });
        } else {
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
        }
      });
    },

    // Function to edit/update
    edit: function(req, res) {
      // Assignment. Learn how to do this
    },

    delete: function(req, res) {
      console.log('KWA SERVER',req.params.email);
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
