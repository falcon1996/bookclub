'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewUser = new Schema({
	
	email : String,
	password: String,
	mybooks: Array
	
});

module.exports = mongoose.model('NewUser', NewUser);
