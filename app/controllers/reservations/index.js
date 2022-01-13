const { reservationModel } = require("../../models");



const createReservation = async (data) => {
    let reservation = await reservationModel.create(data)
    return reservation
}


const getReservationById = async (id) => {
    let reservation = await reservationModel.findById(id).populate({
        path: "idUser",
    }).populate({
        path: "idChambre"
    })
    return reservation
}

const getAllReservations = async () => {
    let reservations = await reservationModel.find().populate({
        path: "idUser",
    }).populate({
        path: "idChambre"
    })
    return reservations
}



module.exports = {
    createReservation,
    getReservationById,
    getAllReservations
}