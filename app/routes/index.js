const router = require("express").Router()

const {dashboardRouter,ChambreRouter,typeDeChambreRouter,reservationRouter,availableRouter} = require("./v1")



router.use(dashboardRouter)
router.use(ChambreRouter)
router.use(typeDeChambreRouter)
router.use(reservationRouter)
router.use(availableRouter)

module.exports = {
    router
}