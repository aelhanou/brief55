const { reservationModel } = require("../../models");



const createReservation = async (data) => {
  
    let reservation = await reservationModel.create(data)
    console.log(reservation);
    return reservation
}



module.exports = {
    createReservation
}