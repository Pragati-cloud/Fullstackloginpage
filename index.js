const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets", express.static("assets"));

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pragati"
});
con.connect(function(error){
    if(error) throw error
    else console.log("connected")
});


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",encoder,function(req, res){
    var email= req.body.email;
    var password = req.body.password;
    connection.query("select * from project1 where email = ? and password = ?",[email, password], function(error, results, fields){
        if(results.length >0){
            res.redirect("/welcome.html");
        }
        else{
            res.redirect("/")
        }
        res.end();
    })
})

//when login sucessfully
app.get("/welcome", function(req,res){
    res.sendFile(__dirname + "/welcome.html")
})



//port
app.listen(4000)