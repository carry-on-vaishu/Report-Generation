
var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var mysql = require("mysql");

module.exports.view = function(callback) {
    var sql = "Select * from ??";
    var table = ["admin"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.findById = function(id,callback) {
    var sql = "SELECT * from ?? where id=?";
    var table = ["admin", id];
    var queries = mysql.format(sql, table);
    conn.query(queries, callback);
}

module.exports.register_view = function(callback) {
    var sql = "Select * from ??";
    var table = ["admin"];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}

module.exports.save = function(data, callback) {
    var sql = "INSERT INTO ?? SET ?";
    var table = ["admin", data];
    var queries = mysql.format(sql, table);
    conn.query(queries,callback);
}