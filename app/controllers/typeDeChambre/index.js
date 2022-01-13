const { typeDeChambreModel } = require("../../models")




const createTypeDeChambre = async (data) => {
    let typeDeChambre = await typeDeChambreModel.create(data)
    console.log(typeDeChambre);
    return typeDeChambre ? true : false
}




const getTypeDeChambreById = async (id) => {
    let typedechambre = await typeDeChambreModel.findById(id)
    console.log(typedechambre);
    return typedechambre
}

const getAllTypeDeChambre = async () => {
    let typedechambre = await typeDeChambreModel.find()
    console.log(typedechambre);
    return typedechambre
}


const deleteTypeDeChambre = async (id) => {
    let typedechambre= await typeDeChambreModel.bulkWrite([
        {
            deleteOne: {
                filter: {_id: id}
            }
        }
    ])

}

const updateTypeDeChambre = async (data) => {
    let {id} = data
    let typedechambre = await typeDeChambreModel.bulkWrite([
        {
            updateOne: {
                filter: {_id:id},
                update: data
            }
        }
    ])
}





module.exports = {
    createTypeDeChambre,
    getTypeDeChambreById,
    getAllTypeDeChambre,
    deleteTypeDeChambre,
    updateTypeDeChambre
}