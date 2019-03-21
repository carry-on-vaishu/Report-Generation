var AdminController = require('../controller/AdminController');
var StudentController = require('../controller/StudentController');

module.exports = function (app) {

    //Login User
    app.get('/login', AdminController.view);
    app.post('/checklogin', AdminController.checklogin);
    app.get('/logout', AdminController.logout);

    //Register User
    app.get('/register-view', AdminController.register_view);
    app.post('/register', AdminController.register);

    //Student
    app.get('/student-view', StudentController.view);
    app.get('/student-add', StudentController.add);
    app.post('/student-save', StudentController.save);

    //Line Chart
    app.get('/dashboard', StudentController.dashboard);

}