exports.getTeamDetails = (req, res) => {
  return res.status(200).json({
    team: "backend4",
    memberNames: ["Swathika B", "Aadarsh Sreekumar", "Anirudh Ramesh"],
  });
};

const fs = require("fs");

let data = fs.readFileSync("./data/Foodjson.json");

const locations = ["US-NC", "IE", "IN"];
const location_food_tax = [0.08, 0.23, 0.18]; // tax correspoding to each location!

const food = JSON.parse(data);

exports.getFoodDetails = (req, res) => {
  let loc = req.query.location;
  let foods;

  if (locations.includes(loc)) {
    if (locations.indexOf(loc) == 0) {
      foods = JSON.parse(JSON.stringify(food));
      foods.forEach((e) => {
        e.price = e.price + 0.08 * e.price;
        e.price = e.price.toFixed(3);
      });
    } 
    else if (locations.indexOf(loc) == 1) {
      foods = JSON.parse(JSON.stringify(food));
      foods.forEach((e) => {
        e.price = e.price + 0.23 * e.price;
        e.price = e.price.toFixed(3);
      });
    } 
    else if (locations.indexOf(loc) == 2) {
      foods = JSON.parse(JSON.stringify(food));
      foods.forEach((e) => {
        e.price = e.price * 82.2; //Convert to INR
        e.price = e.price + 0.18 * e.price;
        e.price = e.price.toFixed(3);
      });
    }
    res.status(200).json({
      error: false,
      message: "successful retrieval!",
      data: foods,
    });
  } else {
    res.status(404).json({
      error: true,
      message: "unsuccessful get request!",
      data: null,
    });
  }
};

//POST METHOD

exports.postFoodDetails = (req, res) => {
  let req_location = req.body.location.toUpperCase();
  let index_of_loc = locations.indexOf(req_location);

  if (index_of_loc != -1) {
    //calculate tax based on location
    //copy of json from file
    temp_foods = JSON.parse(JSON.stringify(food));

    temp_foods.forEach((e) => {

      if (index_of_loc == 2) {
        e.price = e.price * 82.2; //Convert USD to INR
      } 

      e.price = e.price + location_food_tax[index_of_loc] * e.price;
      e.price = e.price.toFixed(3);
    });

    res.status(200).json({
        error: false,
        message: "Good POST Request!",
        data: temp_foods,
      });

  } else {
    return res.status(406).json({
      error: true,
      message: "Bad POST Request!",
      data: null,
    });
  }

//   return res.status(200).send("Post Food Details " + JSON.stringify(req.body));
};
