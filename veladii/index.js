var app = require('express')();
var bodyParser = require('body-parser');
var util = require('./config/const');
var port = process.env.PORT || util.PORT;
var userRepository = require("./repository/userRepository");
const cors = require('cors');

require('./config/db');
app.use(bodyParser.json());
app.use(cors());


//user
app.get('/users', function (req, res) {
    userRepository.selectAll(function (users) {
        res.send(users);
    });
});

app.get('/users/:id', function (req, res) {
    userRepository.selectById(req.params.id, function (users) {
        res.send(users);
    });
});

app.post('/users', function (req, res) {
    userRepository.add(req, function (result) {
        res.send(result);
    });
});

app.delete('/users/:id', function (req, res) {
    userRepository.deleteById(req.params.id, function (result) {
        res.send(result);
    });
});

app.put('/users/:id', function (req, res) {
    userRepository.selectById(req.params.id, function (user) {
        userRepository.edit(user, req , function (newUser) {
            userRepository.addWithEntity(newUser, function (result) {
                res.send(result);
            })
        })
    });
});
//user

app.listen(port, function () {
    console.log("App listening on port !" + port)
});