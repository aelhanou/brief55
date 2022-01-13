const { checkavailableChambre, getAllAvailableChambre } = require("../../../controllers")

const router = require("express").Router()

router.get("/available", async (req,res)=>{
    let data = await getAllAvailableChambre()
    res.status(200).json(data)
})

router.post("/available",async (req,res)=>{
    let {reservationDeDebit,reservationDeFin} = req.body
    if(!reservationDeDebit || !reservationDeFin ){
        res.status(500).json({
            message: "fill the date inputs"
        })
    }
    let check = await checkavailableChambre(reservationDeDebit,reservationDeFin)
     check ?  res.json({
        massage: "this chambre is not available"
    }): res.json({
        massage: "this chambre is available"
    })
    
})





module.exports = {
    availableRouter: router
}




