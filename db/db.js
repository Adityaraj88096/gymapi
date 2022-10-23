const mongoose = require('mongoose');
require('dotenv').config();
const URI = process.env.MONGO_URI

const connectDB = async () => {
    try{
        const connect = await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongoose Connected');
    } catch(err) {
        console.log(err);
    }
};
module.exports = connectDB;