const express = require("express");
const passport = require("passport");

const db = require("../../database");

const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    const userRef = db.collection("users").doc(req.user);
    userRef
        .get()
        .then(user => {
            res.json(user.data());
        })
        .catch(err => {
            res.status(404).json({
                message: "Cannot find user"
            });
        });
});

module.exports = router;
