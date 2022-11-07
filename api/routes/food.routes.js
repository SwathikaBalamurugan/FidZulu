const express = require("express")
const router = express.Router();

const {
    getTeamDetails,
    getFoodDetails,
    postFoodDetails
} = require("../controller/food.controller");

router
    .route("/team")
    .get(getTeamDetails);

router.route("/food")
        .get(getFoodDetails)
        .post(postFoodDetails)

module.exports = router;