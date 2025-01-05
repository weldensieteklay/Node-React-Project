const mongoose = require("mongoose");
// PGil1D8LN64KARDd


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://localhost:27017/shopping-project",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(
      `console.log('Connection to MongoDB established succesfully!'): ${conn.connection.host}`
    );
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
