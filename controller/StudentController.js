var database = require("../config/database.js");
var database = new database();
var conn = database.con();

var Config = require('../config/config.js');
var Config_URL = new Config();
var Student = require('../models/Student');

exports.view = function(req, res){
    try {
        Student.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.render('./viewStudent',{page_title:"Node.js",data:rows});

            }
        });
    }catch (ex){

    }
};

exports.add = function(req, res){
    
        var id = req.params.id;

       Student.findById(id, function(err, rows, fields) {
        if (Config_URL.isDataEmpty(rows)) {
            res.render('./editStudent',{data:rows});
        } else {
            res.render('./addStudent');
        };
	});
     
};

exports.save = function(req, res){
    try {
        var data = req.body;
            var datasssss = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                hindi: data.hindi,
                marathi: data.marathi,
                maths: data.maths,
                physics: data.physics,
            };
            Student.save(datasssss, function (err, info) {

                req.flash('success', 'Data saved Successfully');
                res.redirect('/student-view');
            });

    }catch (ex){

    }
};

//chart
exports.dashboard = function(req,res){

    Student.lineView(function (err, rows, fields) {

        if (Config_URL.isDataEmpty(rows)) {

            res.render('../views/dashboard');
        }
        else {
            req.flash('error',"Please Login First...");
            res.redirect('/login');
        }

    });
};

//chart view
exports.chart = function(req, res){
    try {
        Student.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(rows));

            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({status: false}));

            }
        });
    }catch (ex){

    }
};

exports.line = function(req, res){
    try {
        Student.view(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(rows));

            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify({status: false}));

            }
        });
    }catch (ex){

    }
};

exports.chartView = function(req, res){
    try {
        Student.chartView(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.render('../views/chart.ejs',{page_title:"Customers - Node.js",data:rows});

            }
        });
    }catch (ex){

    }
};

exports.lineView = function(req, res){
    try {
        Student.lineView(function(err, rows, fields) {

            if (Config_URL.isDataEmpty(rows)) {
                res.render('../views/line.ejs',{page_title:"Customers - Node.js",data:rows});

            }
        });
    }catch (ex){

    }
};