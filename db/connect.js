const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
// mongoose
//   .connect(connectionString)
//   .then(() => console.log("CONNECTED TO THE DB..."))
//   .catch((err) => console.log(err));

const connectDB = (url) => {
  return mongoose.connect(url);
  // .then(() => console.log("CONNECTED TO THE DB..."))
};

module.exports = connectDB;
