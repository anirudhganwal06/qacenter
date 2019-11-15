const admin = require("firebase-admin");

const serviceAccount = require("./config/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://qacenter-258813.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;
