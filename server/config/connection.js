const mongoose = require('mongoose');

// connect to wingman database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/wingman');

module.exports = mongoose.connection;
