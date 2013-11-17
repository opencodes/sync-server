"use strict";
var util = require('util');
var Orders = require('../../model/order');

module.exports = function(app) {
	app.get('/client',function(req,res){
		res.render('client',{ title: 'Client'});
	});
	/**
	 * Place Order
	 */
	app.get('/client/placeorder',function(req,res){
		var results = {};
		console.log(req.query);
		if(req.query.item_id && req.query.qty){
			
			var data = {
				order_id : new Date().getTime(),
				itemjson : req.query.item_name,
				qty : req.query.qty,
				status :'pending'
			};
			Orders.addOrder(data,function(err,result){
				if(!err && result){
					result.order = data;
					results = {status :'success',data:result};
				}else{
					results = {status :'err',data:null};
				}
				res.header('Content-Type', 'application/json');
	            res.header('Charset', 'utf-8') ;
	            res.send(req.query.callback + '('+JSON.stringify(results)+');');  
			});
		}else{
			results = {status :'err',data:req.query};
			res.header('Content-Type', 'application/json');
            res.header('Charset', 'utf-8') ;
            res.send(req.query.callback + '('+JSON.stringify(results)+');');  
		}
	});	
};
