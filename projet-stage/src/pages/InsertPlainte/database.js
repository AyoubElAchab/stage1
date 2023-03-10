
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"stage",
});

connection.connect(err=>{
    if(err){
        console.error("error connecting to the database : ",err.stack);
    }else{
        console.log("Connected to the database.")
    }
});

module.exports = connection;