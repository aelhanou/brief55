const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const { router } = require("../routes")
const { ironSession } = require("iron-session/express");

require("dotenv").config()


const runServer = () => {
    const PORT = process.env.PORT
    const DB_HOST = process.env.DB_HOST

    const app = express()
    const session = ironSession({
        cookieName: "iron-session/examples/express",
        password: "Gyn98B6gQOl1YxzaZCu0MCT4Kq6ZicYg",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        },
    });

    app.use(session)


    app.use(cors({
        credentials:true,
        origin: "http://localhost:3000"
    }))
    // app.all('*', function (req, res) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    //     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    // })
    // parse requests of content-type - application/json
    app.use(express.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));


    app.post("/setreservationData", async (req, res) => {
        let data = req.body
        req.session.reservationdata = data
        await req.session.save();
        res.json(data)
    })


    app.get("/getreservationData", async (req, res) => {
        try {
            console.log(req.session.reservationdata);
            res.json(req.session.reservationdata)

        } catch (error) {
            throw error
        }

    })

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