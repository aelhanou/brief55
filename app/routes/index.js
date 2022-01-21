const router = require("express").Router()

const {dashboardRouter,ChambreRouter,typeDeChambreRouter,reservationRouter} = require("./v1")



router.use(dashboardRouter)
router.use(ChambreRouter)
router.use(typeDeChambreRouter)
router.use(reservationRouter)

module.exports = {
    router
}