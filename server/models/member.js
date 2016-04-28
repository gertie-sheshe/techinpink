(function() {
  'use strict';

  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var MemberSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  });

  //Export the model
  module.exports = mongoose.model('Member', MemberSchema);
})();
