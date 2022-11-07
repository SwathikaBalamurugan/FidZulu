const express = require("express")
const router = express.Router();

const {
    getTeamDetails
} = require("../controller/food.controller");

router
    .route("/team")
    .get(getTeamDetails);

module.exports = router;