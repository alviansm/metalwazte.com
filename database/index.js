const mongoose = require('mongoose');
const {MONGO_URI} = require('../config');

try {
    mongoose.connect(
        MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => console.log("MongoDB connection has been successfully established.")
    )
} catch (error) {
    console.log("Database connection could not be established.")
}

const mongoose_connection = mongoose.connection;

module.exports = mongoose_connection;