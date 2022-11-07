const express = require("express")
const router = express.Router();

const {
    getTeamDetails,
    getFoodDetails
} = require("../controller/food.controller");

router
    .route("/team")
    .get(getTeamDetails);

router.route("/food")
        .get(getFoodDetails)

module.exports = router;