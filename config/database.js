var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URL);

var db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to mongodb ${db.name} at ${db.host}:${db.port}`);
})