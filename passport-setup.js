const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const db = require("./database");

const keys = require("./config/keys");

passport.serializeUser((userId, done) => {
    done(null, userId);
});

passport.deserializeUser((id, done) => {
    const usersRef = db.collection("users");
    usersRef
        .doc(id)
        .get()
        .then(user => {
            done(null, user.data());
        })
        .catch(err => {
            console.log(err);
        });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.google.clientId,
            clientSecret: keys.google.clientSecret,
            callbackURL: "/api/auth/google/redirect"
        },
        (accessToken, refreshToken, profile, done) => {
            // add the user to the database
            const usersRef = db.collection("users");
            usersRef
                .where("googleId", "==", profile.id)
                .get()
                .then(snapshot => {
                    if (snapshot.empty) {
                        console.log("1111");
                        db.collection("users")
                            .add({
                                name: profile.displayName,
                                googleId: profile.id,
                                photoUrl: profile.photos[0].value
                            })
                            .then(newUserRef => {
                                done(null, newUserRef.id);
                            })
                            .catch(err => {
                                console.log(err);
                            });
                    } else {
                        snapshot.forEach(doc => {
                            done(null, doc.id);
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    )
);
