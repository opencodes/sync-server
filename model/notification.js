var table = 'notification';
var Db = require('./model.js');
var util = require('util');
var Query = require('./sql');

var notification = {
	/**
	 * Add order
	 * @param data
	 */
	addNotification : function(data){
		var sql = "INSERT INTO `"+table+"` (`id`, `key`, `val`, `user_type`) ";
		    sql+= "VALUES (NULL, '"+data.key+"', '"+data.value+"', '"+data.usertype+"');"; 
		
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
	deleteNotification : function(id){
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