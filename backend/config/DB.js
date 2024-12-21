const mongoose = require("mongoose");
// PGil1D8LN64KARDd
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://yirgalemtekie825:PGil1D8LN64KARDd@cluster0.pt0zp.mongodb.net/shopping-project?retryWrites=true&w=majority",
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
