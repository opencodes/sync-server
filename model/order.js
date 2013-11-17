var table = 'orders';
var Db = require('./model.js');
var util = require('util');
var Query = require('./sql');

var orders = {
	/**
	 * Add order
	 * @param data
	 */
	getAllOrder : function(callback){
		var sql = "SELECT * FROM `"+table+"`;"; 
		console.log(sql);
        Db.query(
            sql,
            function selectCb(err, results) {
                if (!err) {
                  return callback(null, results); 
                }
                else{
                  return callback(err, null); 
                }            
            }
         );
	},
	/**
	 * Add order
	 * @param data
	 */
	getPendingOrder : function(callback){
		var sql = "SELECT * FROM `"+table+"` where status='pending';"; 
		console.log(sql);
        Db.query(
            sql,
            function selectCb(err, results) {
                if (!err) {
                  return callback(null, results); 
                }
                else{
                  return callback(err, null); 
                }            
            }
         );
	},
	/**
	 * Add order
	 * @param data
	 */
	addOrder : function(data,callback){
		console.log(data);
		Query.insert(data,table,function(err,result){
    		if(!err){
    			callback(null,result);
    		}else{
    			console.log(err);
    			callback(null,err);
    		}
    	});
	},
	/**
	 * Add order
	 * @param data
	 */
	deleteOrder : function(id,callback){
		var sql = "DELETE FROM `"+table+"` WHERE `id` = "+id+";"; 
		
        Db.query(
            sql,
            function selectCb(err, results) {
                if (!err) {
                  return callback(null, results); 
                }
                else{
                  return callback(err, null); 
                }            
            }
         );
	}
		
};
module.exports = orders;