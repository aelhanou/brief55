const { chambreModel } = require("../../models")




const createChambre = async (data) => {
    let chambre = await chambreModel.create(data)
    return chambre ? true : false
}

const getChambreById = async (id) => {
    let chambre = await chambreModel.findById(id).populate({
        path: "idTypeDeChambre",
        select: "typeDeChambre typeDeVue",
        populate: {
            path: "idTypeDeLit",
            select: "typeDeLit"
        }
    })
    console.log(chambre);
}

const getAllChambres = async () => {
    let chambres = await chambreModel.find().populate({
        path: "idTypeDeChambre",
        select: "typeDeChambre typeDeVue",
        populate: {
            path: "idTypeDeLit",
            select: "typeDeLit"
        }
    })
    return chambres
}


const deleteChambre = async (id) => {
    let chambre= await chambreModel.bulkWrite([
        {
            deleteOne: {
                filter: {_id: id}
            }
        }
    ])

    console.log(chambre);
}

const updateChambre = async (data) => {
    let {id} = data
    let chambre = await chambreModel.bulkWrite([
        {
            updateOne: {
                filter: {_id:id},
                update: data
            }
        }
    ])
}


module.exports = {
    createChambre,
    getChambreById,
    getAllChambres,
    deleteChambre,
    updateChambre
}