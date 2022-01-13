const {createUser} = require("./users")
const {createReservation,getAllReservations} = require("./reservations")
const {createTypeDeLit,getTypeDeLitById,getAllTypeDeLit,deleteTypeDeLit,updateTypeDeLit} = require("./typeDeLit")
const {createTypeDeChambre,getTypeDeChambreById,getAllTypeDeChambre,deleteTypeDeChambre,updateTypeDeChambre} = require("./typeDeChambre")
const {createChambre,getChambreById,getAllChambres,deleteChambre,updateChambre} = require("./chambres")
const {isAvailable,checkavailableChambre,getAllAvailableChambre} = require("./disponsibilities")

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
    isAvailable,
    getTypeDeLitById,
    getAllTypeDeLit,
    deleteTypeDeLit,
    updateTypeDeLit,
    getTypeDeChambreById,
    getAllTypeDeChambre,
    deleteTypeDeChambre,
    updateTypeDeChambre,
    checkavailableChambre,
    getAllAvailableChambre,
    getAllReservations
}