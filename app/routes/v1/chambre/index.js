const { createChambre, getAllChambres, deleteChambre, updateChambre } = require("../../../controllers")

const router = require("express").Router()


router.post("/addChambre", async (req, res) => {

    // if (!dataChambre) {
    //     res.status(500).json({
    //         message: "fill the fields inputs"
    //     })
    // }
    let data =await createChambre(req.body)
    // await getChambreById("61dac0e28f5e580f90fccaf9")
    res.status(201).json(data)
})

router.get("/chambres", async (req,res)=>{
    let data = await getAllChambres()
    res.status(200).json(data)
})



router.get("/deleteChambre/:id", async (req,res)=>{
    let {id} = req.params
    await deleteChambre(id)
    res.status(204).json({
        message: "Deleted successfully"
    })
})


router.post("/updateChambre", async (req,res) => {
    let {data} = req.body
    await updateChambre(data)
    
    res.status(204).json({
        message: "updated successfully"
    })

})


module.exports = {
    ChambreRouter: router
}



