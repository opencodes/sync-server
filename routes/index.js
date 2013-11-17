"use strict";
var util = require('util');
var Orders = require('../model/order');


module.exports = function (app) {
  app.get('/', function(req, res){
	  Orders.getAllOrder(function(err,result){
		  var results = {no : 0,data:null};
		  if(!err && result){
			  results = {no : result.length,data:result};
		  }
		  res.render('index.ejs',{ title: 'Server',items:results});
	  });    
  });  
  require('./operator')(app);
  require('./client')(app);
};

