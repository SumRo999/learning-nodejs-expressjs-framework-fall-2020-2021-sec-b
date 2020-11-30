const db = require('../db-secure');

module.exports ={
	
	createBook: function(data , callback){
		var sql = "INSERT INTO `book` VALUES (?,?,?,?,?,?,?)";
		db.execute(sql, ['', data.bookid , data.category , data.booktitle, data.description , data.bookpicture , data.price ] ,function(status){
			console.log(status);
			callback(status);
		});
	},

	getById: function(data , callback){
		var sql = "select * from book where bookid=?";
		db.getResults(sql, [data.bookid], function(results){
			console.log(results);
			callback(results);
		});
	},

	delete: function(data , callback){
		var sql = "DELETE FROM `book` WHERE bookid=?";
		db.execute(sql, [data.bookid], function(status){
			console.log(status);
			callback(status);
		});
	},

	getAll: function(callback){
		var sql = "select * from `book`";
		db.getResults(sql, null, function(results){
			console.log(results);
			callback(results);
		});
	}
}