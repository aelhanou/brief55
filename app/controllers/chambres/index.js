const { chambreModel } = require("../../models")





const createChambre = async (data) => {
    try {
        let chambre = await chambreModel.create(data)
        return chambre
    } catch (error) {
        throw error
    }

}


const getChambreById = async (id) => {
    try {
        let chambre = await chambreModel.findById(id).populate({
            path: "idTypeDeChambre",
            select: "typeDeChambre typeDeVue",
            populate: {
                path: "idTypeDeLit",
                select: "typeDeLit"
            }
        })
        return chambre
    } catch (error) {
        throw error
    }
}

const getAllChambres = async () => {
    try {
        let chambres = await chambreModel.find().populate([
            {
                path: "idTypeDeChambre",
                select: "typeDeChambre typeDeVue",
                populate: {
                    path: "idTypeDeLit",
                    select: "typeDeLit"
                }
            },
            {
                path: "id_Reservations",
            }
        ])
        return chambres
    } catch (error) {
        throw error
    }

}


const deleteChambre = async (id) => {
    try {
        await chambreModel.bulkWrite([
            {
                deleteOne: {
                    filter: { _id: id }
                }
            }
        ])
    } catch (error) {
        throw error
    }

}

const updateChambre = async (data) => {
    try {
        let { id } = data
        await chambreModel.bulkWrite([
            {
                updateOne: {
                    filter: { _id: id },
                    update: data
                }
            }
        ])
    } catch (error) {
        throw error
    }
}


module.exports = {
    createChambre,
    getChambreById,
    getAllChambres,
    deleteChambre,
    updateChambre
}