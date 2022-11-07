const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let food = fs.readFileSync('./data/Foodjson.json');
// console.log("FOOD:" + food);

var app = express();
app.use(bodyParser.json());

const foodRoutes = require("./api/routes/food.routes");

app.use("/api/v1", foodRoutes);

const port = 3034;
app.listen(port,()=>{
    console.log("Server is running at port 3034...");
});
