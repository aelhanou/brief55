const { userModel } = require("./user")
const { reservationModel } = require("./reservation")
const { typeDeLitModel } = require("./typeDeLit")
const { typeDeChambreModel } = require("./typeChambre")
const { chambreModel } = require("./chambre")

module.exports = {
    userModel,
    reservationModel,
    typeDeLitModel,
    typeDeChambreModel,
    chambreModel
}