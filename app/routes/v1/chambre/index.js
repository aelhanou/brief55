const { createChambre, getAllChambres } = require("../../../controllers")

const router = require("express").Router()


router.post("/addChambre", async (req, res) => {
    let { dataChambre } = req.body

    if (!dataChambre) {
        res.status(500).json({
            message: "fill the fields inputs"
        })
    }
    await createChambre(dataChambre)
    // await getChambreById("61dac0e28f5e580f90fccaf9")
    res.status(201).json({
        message: "created successfully"
    })
})

router.get("/chambres", async (req,res)=>{
    let data = await getAllChambres()
    res.status(200).json(data)
})


module.exports = {
    ChambreRouter: router
}



