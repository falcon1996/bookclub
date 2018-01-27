'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	
	type: String,
	allbooks: Array
});

module.exports = mongoose.model('User', User);
