const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "jovanmusicstore",
});

db.connect((err) => {
    if (err) {
        console.error("MySQL connection error:", err);
        return;
    }
    console.log("MySQL connected!");
});

module.exports = db;
