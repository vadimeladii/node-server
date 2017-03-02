/**
 * Created by veladii on 3/1/17.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('users', new Schema({
    id: Number,
    username: String
}));
