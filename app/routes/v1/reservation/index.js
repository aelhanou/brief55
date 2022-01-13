const { createUser, createReservation, isAvailable } = require("../../../controllers")

const router = require("express").Router()


router.post("/reservation", async (req, res) => {
    // const data = {
    //     "nbrDeAdulte": "2",
    //     "nbrDeEnfant": "1",
    //     "dateDeDebit": new Date,
    //     "dateDeFin": new Date,
    //     "idUser": "",
    //     "idChambre": "61dac0e28f5e580f90fccaf9",
    // }

    // const dataUser = {
    //     "prenom": "azeddine",
    //     "nom": "elhanouni",
    //     "tel": "01241251544",
    //     "email": "elhanouniazeddine00@gmail.com",
    //     "country": "maroc",
    //     "nbrDeLaCarte": "11241444532246246",
    //     "expireCarte": "22/23"
    // }

    // const chambrereserved = {
    //     "status": "reserved",
    //     "reservationDeDebit": "",
    //     "reservationDeFin": "",
    //     "idChambre": ""
    // }

    let {dataUser,data,chambrereserved} = req.body
    console.log(dataUser,data,chambrereserved);
    let user = await createUser(dataUser)
    let reservation = await createReservation({ ...data, "idUser": user })
    await isAvailable({ ...chambrereserved, "reservationDeDebit": reservation?.dateDeDebit, "reservationDeFin": reservation?.dateDeFin, "idChambre": reservation.idChambre })

    res.status(201).json(data)
})


module.exports = {
    reservationRouter: router
}



