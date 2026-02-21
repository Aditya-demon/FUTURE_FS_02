const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Adity@2005",  // ⚠ Put your real password here
    database: "minicrm"
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("MySQL Connected Successfully");
    }
});

module.exports = connection;