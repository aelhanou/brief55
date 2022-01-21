const { reservationModel, chambreModel } = require("../../models");



const createReservation = async (data) => {
    try {
        let reservation = await reservationModel.create(data)

        let { idChambre } = data
        await chambreModel.bulkWrite([
            {
                updateOne: {
                    filter: { _id: idChambre },
                    update: { $addToSet: { id_Reservations: reservation?._id } }
                }
            }
        ])

        return reservation
    } catch (error) {
        throw error
    }

}



const isReserved = async (debit, fin, idChambre) => {
    try {
        let available = await reservationModel.findOne({ $and: [{ "idChambre": idChambre }, { $or: [{ "dateDeDebit": { "$lte": fin }, "dateDeFin": { "$gte": debit } }] }] })
        return available
    } catch (error) {
        throw error
    }
}

const getReservationById = async (id) => {
    try {
        let reservation = await reservationModel.findById(id).populate({
            path: "idUser",
        }).populate({
            path: "idChambre",
            populate: {
                path: "idTypeDeChambre",
                populate: {
                    path: "idTypeDeLit"
                }
            }
        })
        return reservation
    } catch (error) {
        throw error
    }
}

const getAllReservations = async () => {
    try {
        let reservations = await reservationModel.find().populate([{
            path: "idUser",
        }, {
            path: "idChambre",
            populate: {
                path: "idTypeDeChambre",
                populate: {
                    path: "idTypeDeLit"
                }
            }
        }])
        return reservations
    } catch (error) {
        throw error
    }
}



module.exports = {
    createReservation,
    getReservationById,
    getAllReservations,
    isReserved
}