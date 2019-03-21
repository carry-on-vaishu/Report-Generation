
var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var mysql = require("mysql");

module.exports.view = function(callback) {
    var sql = "Select * from ??";
    var table = ["student"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.save = function(data, callback) {
    var sql = "INSERT INTO ?? SET ?";
    var table = ["student", data];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.findById = function(id,callback) {
    var sql = "SELECT * from ?? where id=?";
    var table = ["student", id];
    var queries = mysql.format(sql, table);
    conn.query(queries, callback);
}

module.exports.chartView = function(callback) {
    var sql = "Select subject, marks from ??";
    var table = ["student"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.lineView = function(callback) {
    var sql = "Select id, hindi, marathi, maths from ??";
    var table = ["student"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}
