const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
