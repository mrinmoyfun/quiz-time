'use strict';

var config = require('../config');
var Mongoose = require('mongoose');
var logger = require('../logger');

// Connect to the database
// construct the database URI and encode username and password.
// var dbURI = "mongodb://" + 
// 			encodeURIComponent(config.db.username) + ":" + 
// 			encodeURIComponent(config.db.password) + "@" + 
// 			config.db.host + ":" + 
// 			config.db.port + "/" + 
// 			config.db.name;
Mongoose.connect("mongodb://medgag:<PASSWORD>@cluster0-shard-00-00-zvioo.mongodb.net:27017,cluster0-shard-00-01-zvioo.mongodb.net:27017,cluster0-shard-00-02-zvioo.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", {
  useMongoClient: true,
});

// Throw an error if the connection fails
Mongoose.connection.on('error', function(err) {
  if (err) throw err;
});

// mpromise (mongoose's default promise library) is deprecated, 
// Plug-in your own promise library instead.
// Use native promises
Mongoose.Promise = global.Promise;

module.exports = {
  Mongoose,
  models: {
    user: require('./schemas/user.js'),
    room: require('./schemas/room.js'),
    question: require('./schemas/question.js')
  }
};
