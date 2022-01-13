const { dashboardRouter } = require("./dashboard")
const { ChambreRouter } = require("./chambre")
const { typeDeChambreRouter } = require("./typedechambre")
const {reservationRouter } = require("./reservation")
const {availableRouter} = require("./disponsibillitie")
module.exports = {
    dashboardRouter,
    ChambreRouter,
    typeDeChambreRouter,
    reservationRouter,
    availableRouter
}