const mongoose = require('mongoose');

const db = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`DB Connection Successful`);
    
  } catch (error) {
    console.log(`Failed to connect DB`);
  }
}

module.exports = { db } 