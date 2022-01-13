const express = require("express")
const mongoose = require("mongoose")
const path = require('path');
const cors = require("cors");
const { router } = require("../routes")
const session = require('express-session');
const MongoDBStore = require('express-mongodb-session')(session);
require("dotenv").config()


const runServer = () => {
    const PORT = process.env.PORT
    const DB_HOST = process.env.DB_HOST

    const app = express()
    const store = new MongoDBStore({
        uri: DB_HOST,
        collection: 'mySessions'
    });

    app.use(cors());
    // parse requests of content-type - application/json
    app.use(express.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));
    // Catch errors
    store.on('error', function (error) {
        console.log(error);
    });

    app.use(require('express-session')({
        secret: 'zer0',
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
        },
        store: store,
        resave: true,
        saveUninitialized: true
    }));

    app.use(router)

    mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected");
    })
    app.listen(PORT, () => {
        console.log(`Server is Running in Port: ${PORT} http://localhost:${PORT}`);
    })
}





module.exports = {
    runServer
}