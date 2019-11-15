const passport = require("passport");

exports.getGoogleAuthCode = (req, res) => {
  passport.authenticate("google", {
    scope: ["profile"]
  });
};
