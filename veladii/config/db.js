/**
 * Created by veladii on 3/1/17.
 */
var mongoose = require('mongoose');
var util = require('./const');

mongoose.connect(util.URL_DB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, util.CONNECTION_DB_ERROR));
db.once('open', function() {
    console.log(util.CONNECTION_DB_OK);
});