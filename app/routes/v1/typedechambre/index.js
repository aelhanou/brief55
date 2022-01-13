const router = require("express").Router()


router.get("/typeDeChambre", (req, res) => {
    res.render("typeDeChambre")
})


module.exports = {
    typeDeChambreRouter: router
}

