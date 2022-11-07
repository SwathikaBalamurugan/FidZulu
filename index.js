const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let food = fs.readFileSync('./data/Foodjson.json');
// console.log("FOOD:" + food);

var app = express();
app.use(bodyParser);

const port = 3034;
app.listen(port,()=>{
    console.log("Server is running at port 3034...");
})



