const express = require("express")
const mongoose = require("mongoose")
const path = require('path');
const cors = require("cors");
const { router } = require("../routes")
const { createChambre, getChambreById, getAllChambres, createTypeDeChambre, deleteChambre, updateChambre, createUser, createReservation, isAvailable, getTypeDeLitById, getAllTypeDeLit } = require("../controllers")
require("dotenv").config()



const runServer = () => {
    const PORT = process.env.PORT
    const DB_HOST = process.env.DB_HOST

    const app = express()


    app.use(cors());

    // parse requests of content-type - application/json
    app.use(express.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));


    // const data = {
    //     "id": "61dac0e28f5e580f90fccaf9",
    //     "nomDeCHambre": "room 3",
    //     "prixDeChambre": "600dh",
    // }

    // const data = {
    //     "nbrDeAdulte": "2",
    //     "nbrDeEnfant": "1",
    //     "dateDeDebit": new Date,
    //     "dateDeFin": new Date,
    //     "price": "499dh",
    //     "idUser" : "",
    //     "idChambre" : "61dac0e28f5e580f90fccaf9",
    // }

    // const dataUser = {
    // "prenom": "azeddine" ,
    // "nom": "elhanouni",
    // "tel": "01241251544",
    // "email": "elhanouniazeddine00@gmail.com",
    // "country": "maroc",
    // "nbrDeLaCarte": "11241444532246246",
    // "expireCarte": "22/23" 
    // }

    // const chambreDisponible = {
    //     "status" : "reserved",
    //     "reservationInterval": "",
    //     "idChambre" : ""
    // }




    app.get("/", async (req, res) => {

        // let status = await createChambre(data)
        // console.log(status);
        // await getChambreById("61dac0e28f5e580f90fccaf9")
        // await createTypeDeChambre(data)
        // await deleteChambre("61dac07a8202e0517f6fed7a")
        // await updateChambre(data)

        // let user = await createUser(dataUser)
        // let reservation = await createReservation({...data,"idUser":user})
        // await isAvailable({...chambreDisponible,"reservationDeDebit" : reservation?.dateDeDebit,"reservationDeFin":reservation?.dateDeFin,"idChambre":reservation.idChambre})
        // console.log(reservation);
        let to = await getAllChambres()

        // let to = await getAllTypeDeLit()
        // let to = await getTypeDeLitById("61d9b8e693938eb94d8a538a")

        res.json(to)
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