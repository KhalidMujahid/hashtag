const mongoose = require("mongoose");

async function dbconnect() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URI);
  console.log("DB connected");
}

module.exports = dbconnect;
