const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var uri = 'mongodb://admin:wEJf5Kr6vQBndMwb@' + 'cluster0-shard-00-00-7jzls.mongodb.net:27017,' +
'cluster0-shard-00-01-7jzls.mongodb.net:27017,' +
'cluster0-shard-00-02-7jzls.mongodb.net:27017/oftalclinic'+
'?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';


module.exports = mongoose.connect(uri);