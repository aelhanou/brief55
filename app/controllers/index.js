const {createUser} = require("./users")
const {createReservation,getAllReservations,getReservationById,isReserved} = require("./reservations")
const {createTypeDeLit,getTypeDeLitById,getAllTypeDeLit,deleteTypeDeLit,updateTypeDeLit} = require("./typeDeLit")
const {createTypeDeChambre,getTypeDeChambreById,getAllTypeDeChambre,deleteTypeDeChambre,updateTypeDeChambre} = require("./typeDeChambre")
const {createChambre,getChambreById,getAllChambres,deleteChambre,updateChambre} = require("./chambres")

module.exports = {
    createUser,
    createReservation,
    createTypeDeLit,
    createTypeDeChambre,
    createChambre,
    getChambreById,
    getAllChambres,
    deleteChambre,
    updateChambre,
    getTypeDeLitById,
    getAllTypeDeLit,
    deleteTypeDeLit,
    updateTypeDeLit,
    getTypeDeChambreById,
    getAllTypeDeChambre,
    deleteTypeDeChambre,
    updateTypeDeChambre,
    getAllReservations,
    isReserved,
    getReservationById
}