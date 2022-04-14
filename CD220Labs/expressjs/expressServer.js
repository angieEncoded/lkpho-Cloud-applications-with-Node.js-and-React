const express = require('express');
const app = new express();

let loginDetails = [];

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})


// Challenge from lab
app.get("/fetch/:num", (req,res, next) => {

    const requestedNum = req.params.num;
    const numbers = {
        0: "January",
        1: "February",
        3: "March"
    }

    if(requestedNum in numbers){
        res.send(numbers[requestedNum]);
    } else {
        res.send("That month does not exist in this list.")
    }
    // console.log(requestedNum in numbers)


})



app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

