const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

const model = mongoose.model('User', UserSchema);

module.exports = model;