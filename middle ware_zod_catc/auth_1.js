//Why Auth

//1. (Does this user have funds to visit doctor?)
//2.  Ensure input by the user is valid(BP/blood test)


// -----------------Another Scenario

// Before receiving the out put at the end point two things needs to happend
// 1. User needs to send kidneyId as  a query param which dshould be from 1,2 
// 2. User should send username and password in headers 

// localhost:3000?n=30
// this n is called a query param

// ---------------------3 Ways to send inputs to a requests
// 1. query params 
// 2. Body
// 3. Headers

//Ugly way of writing it
const express = require("express");
const app = express();

app.get("/health-checkup",function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !="harirat" && password !="pass"){
        res.status(403).json({
            msg:"User dont exist",
        });
        return;
    }
    if(kidneyId !=1 && kidneyId !=2){
        res.status(411).json({
            msg: "wrong inputs",


        });
        return;
    }

    res.send("Your heart is healthy");
})

//for app replacement again same code so better to use middlewares


const app = express();

function userMiddleware(req,res,next){
    if(username != "harkirat " && password !="pass"){
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    }
    else{
        next();
    }
};

function kidneyIdMiddlewares(req,res,next){
    if(kidneyId !=1 && kidneyId !=2){
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    }
    else{
        next();
    }
}

app.get