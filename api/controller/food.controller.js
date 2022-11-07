exports.getTeamDetails = (req, res) => {
    return res.status(200).json({
        team: "backend4",
        memberNames: [
            "Swathika B",
            "Aadarsh Sreekumar",
            "Anirudh Ramesh"
        ]
    })
}