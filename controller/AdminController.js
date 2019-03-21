var database = require("../config/database.js");
var database = new database();
var conn = database.con();
var Config = require('../config/config.js');
var Config_URL = new Config();
var Admin = require('../models/Admin');

var mysql = require("mysql");
exports.view = function(req, res){
    res.render('./login');
};

exports.checklogin = function(req,res){

    var query1 = "SELECT * FROM ?? where username=? and password=?" ;
    var table1 = ["admin",req.body.username,req.body.password];
    query1 = mysql.format(query1,table1);
    conn.query(query1, function(err1, rows1)
    {
        if(rows1.length==""){
            req.flash('error', 'Sorry Username and Password does not match..');
            res.redirect('/login');
        } else{

            req.flash('success', 'You are login successfully.');
            res.redirect('/student-view');
        }
    });
};

exports.register_view = function(req, res){
    res.render('../views/register.ejs');
};

exports.register = function (req, res) {
    try{
        var data = req.body;

        var datas = {
            username: data.username,
            email: data.email,
            password: data.password,
            confirm_password: data.confirm_password,
        };
        Admin.save(datas, function(err, info) {
            if (data) {
                req.flash('success', 'You are register Successfully');
                res.redirect('/login');
            } else {
                req.flash('Error', 'Failed to register');
                res.redirect('/register');
            }
        });
    }catch (ex){

    }
};

exports.logout = function(req, res){
  req.flash('success', 'You are logout successfully.');
  res.redirect('/login');
};