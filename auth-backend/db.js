import mysql from "mysql2";

// 1. To connect to mysql server.
const mySql_db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Querty@123", 
    // database: ""
});
console.log("MySQL Connected Successfully");
// 2. Create a database.
// 3. Create a table.