require("dotenv").config();

// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    /*
    TA: 
        Option1: Create an .env file and create a SQL_PASSWORD var w/ Password
        Option2: Hard-code Password
    */
    password: process.env.SQL_PASSWORD,
    database: "burgers_db"
});

connection.connect(function(err) {
    if(err){
        console.log("error in connection: ", err.stack);
        return;
    }
    console.log("Connection Established as id:",connection.threadId);
});

module.exports = connection;