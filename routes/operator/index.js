"use strict";
var util = require('util');
var Orders = require('../../model/order');

module.exports = function(app) {
	
	app.get('/operator/', function(req, res){
		  Orders.getPendingOrder(function(err,result){
			var results = {no : 0,data:null};
			  if(!err && result){
				  results = {no : result.length,items:result};
			}
			results = {status :'err',data:results};
			res.header('Content-Type', 'application/json');
            res.header('Charset', 'utf-8') ;
            res.send(req.query.callback + '('+JSON.stringify(results)+');');
		  });    
	});
	
	app.get('/operator/deleteorder',function(req,res){
		res.render('module/module',{title:'Module'});
	});
	
	app.get('/operator/updateorder',function(req,res){
		res.render('module/module',{title:'Module'});
	});	
};
