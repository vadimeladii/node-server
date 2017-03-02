/**
 * Created by veladii on 3/1/17.
 */
var userModel = require('../models/user');

var UserRepository = {
    selectAll: function (callback) {
        userModel.find(function (err, users) {
            if (err)
                callback({err: err});
            callback(users);
        });
    },
    selectById: function (id, callback) {
        userModel.findOne({'id': id}, function (err, user) {
            if (err)
                callback({err: err});
            callback(user)
        })
    },
    add: function (req, callback) {
        user = new userModel({
            id: req.body.id,
            username: req.body.username
        });
        user.save(function (err) {
            if (err)
                callback({err: err});
            callback({result: true})
        });
    },
    addWithEntity: function (user, callback) {
        user.save(function (err) {
            if (err)
                callback({err: err});
            callback({result: true})
        });
    },
    deleteById: function (id, callback) {
        userModel.remove({'id': id}, function (err) {
            if (err)
                callback({err: err});
            callback({result: true})
        })
    },
    edit: function (user, req, callback) {
        user.id = req.body.id ? req.body.id : user.id;
        user.username = req.body.username ? req.body.username : user.username;
        callback(user);
    }
};


module.exports = UserRepository;


