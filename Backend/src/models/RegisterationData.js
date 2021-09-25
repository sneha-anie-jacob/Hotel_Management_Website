// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://localhost:27017/DDD');

// Schema Definition
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    password: String,
});

// Model Creation
var RegistrationData = mongoose.model('Registrationdata', RegistrationSchema);

module.exports = RegistrationData;