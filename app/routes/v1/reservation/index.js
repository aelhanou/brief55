const { createUser, createReservation, getAllReservations, isReserved, getReservationById } = require("../../../controllers");

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

    let { dataUser, data } = req.body
    let check = await isReserved(data.dateDeDebit, data.dateDeFin, data.idChambre)
    if (check) {
        res.json({
            massage: "this chambre is not available"
        })

    } else {

        let user = await createUser(dataUser)
        await createReservation({ ...data, "idUser": user })
        res.status(201).json({
            message: "Reservation Created successfully"
        })
    }
})


router.get("/reservations", async (req, res) => {
    let data = await getAllReservations()
    res.status(200).json(data)
})


router.get("/reservation/:id", async (req, res) => {
    let { id } = req.params
    if (!id) {
        res.status(500).json({
            message: "id doesn't exist"
        })
    }
    let data = await getReservationById(id)
    res.status(200).json(data)
})

router.get("/deleteReservation/:id", async (req, res) => {
    let { id } = req.params
    await deleteChambre(id)
    res.status(204).json({
        message: "Deleted successfully"
    })
})


router.post("/updateReservation", async (req, res) => {
    let { data } = req.body
    await updateChambre(data)

    res.status(204).json({
        message: "updated successfully"
    })

})

module.exports = {
    reservationRouter: router
}



