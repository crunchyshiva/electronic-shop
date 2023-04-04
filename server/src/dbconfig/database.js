const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.DATABASE_URL;

const connectDB = async () => {
    console.log('in the database',)
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
