var mongoose = require('mongoose');
const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb://horizonqaapp:H%40r!z0nQA2108@65.0.176.149:27017/lm-api-qa' , {
       
      });
      console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;