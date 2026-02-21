const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Adity@2005",
  database: "mini_crm"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("MySQL Connected Successfully");
  }
});

// Test Route
app.get("/", (req, res) => {
  res.send("Server is working");
});

// Get All Leads
app.get("/api/leads", (req, res) => {
  db.query("SELECT * FROM leads", (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

// Add Lead
app.post("/api/leads", (req, res) => {
  const { name, email } = req.body;
  db.query(
    "INSERT INTO leads (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json({ message: "Lead Added Successfully" });
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});