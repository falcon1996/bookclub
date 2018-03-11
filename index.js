'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = process.cwd();
var http = require('http');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var books = require('google-books-search');

var app = express();
require('dotenv').load();

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var book = require('./books.js');
var user = require('./users.js');

app.post('/myapi', function(req, res) {    
    //res.json({insert: "success"});
    
    books.search(req.body.myquery, function(error, results) {
        if ( ! error ) {
            res.json({insert:results});
        } else {
            console.log(error);
        }
    });
    
});


app.post('/addnew', function(req,res){
    
    var newbook = req.body.newbook;
    console.log(newbook);
    
    book.findOne({type:'all'},function(err,doc){
        
        if(doc){
            console.log('Present');
            
            book.update({type: 'all' },{$push: {allbooks: newbook}},{safe: true, upsert: true},function(err,doc){
                
                if(doc){
                    console.log(doc);
                    book.findOne({type:'all'},function(err,doc){
                        console.log(doc.allbooks)
                        res.json({insert: doc.allbooks});
                    });
                }
                else if(!doc){
                    console.log('Something went Wrong!');
                }
                else if(err){
                    console.log(err);
                }
            })
            
        }
        
        else if(!doc){
            console.log('Not Present');
            
            book.create({type:'all',allbooks:[]},function(err,doc){
                if(doc){
                    console.log('Created');
                    console.log(doc);
                }
                else if(!doc){
                    console.log('Error in creating!');
                }
                else if(err){
                    console.log(err);
                }
                
            })
            
        }
        
        else if(err){
            console.log(err);
        }
        
    })
    
})


app.post('/signup',function(req,res){
    console.log(req.body);
    //console.log(typeof(req.body.password));
    
    user.findOne({email:req.body.user},function(err,doc){
        if(doc){
            res.json({mystatus:'User already exists!'});
         }
         else if(!doc){
             user.create({ email:req.body.user, password:req.body.password, mybooks:[] });
             res.json({mystatus: 'User Created!'});
         }
    })
    
})


http.createServer(app).listen(8081, function(){
    console.log("Example of app listning on port 8081");
});
