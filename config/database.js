const mysql = require("mysql");

const db = mysql.createConnection(process.env.DATABASE_URL);

console.log("DB connected");
db.end();

module.exports = db;
