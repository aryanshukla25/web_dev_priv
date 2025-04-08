const express = require("express")

const app = express();
app.get("health-checkup",function(req,res){
    res.send("Your heart is healthy");
})