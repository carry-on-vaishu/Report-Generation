var mysql = require("mysql");

//you can include all your controllers

module.exports = function () {

    this.con=function () {
        var conn= mysql.createConnection({ 
            host: 'us-cdbr-iron-east-03.cleardb.net',
            user: 'b6b14f2ccb5f02',
            password : '48a06f00',
            // port : 3306, //port mysql
            database:'heroku_9038e5f31a461bb'
        });
        return conn;
    }
}
//mysql://b6b14f2ccb5f02:48a06f00@us-cdbr-iron-east-03.cleardb.net/heroku_9038e5f31a461bb?reconnect=true