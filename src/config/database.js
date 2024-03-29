const mongoose = require("mongoose");

async function dbconnect() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(
    process.env.NODE_ENV === "development"
      ? process.env.MONGO_URI_DEV
      : process.env.MONGO_URI
  );
  console.log("DB connected");
}

module.exports = dbconnect;
