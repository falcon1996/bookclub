'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = process.cwd();
var http = require('http');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var books = require('google-books-search');

var app = express();
require('dotenv').load();

app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {    
    res.json({insert: "success"});
    books.search('Professional JavaScript for Web Developers', function(error, results) {
        if ( ! error ) {
            console.log(results);
        } else {
            console.log(error);
        }
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Example of app listning on port 8080");
});
