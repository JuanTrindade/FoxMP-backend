const mongoose = require('mongoose');

try {
    mongoose.connect(process.env.MONGODB_STRING)
    console.log('Connection to database sucessfull');
    
} catch (error) {
    console.log(error);
}