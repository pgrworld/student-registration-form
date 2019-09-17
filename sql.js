var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "studentREG"
 });
var sql = {};

sql.function1 = function(name,pinno,email,password,address){
var sql = "INSERT INTO stuREGT1(Name,Pinno,Email,Password,Address) VALUES ('"+name+"','"+pinno+"','"+email+"','"+password+"','"+address+"')";
    con.query(sql, function (err, res) {
    if (err) throw err;
    console.log("DONE")
    });
}

module.exports = {sql};


