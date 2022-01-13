const { typeDeLitModel } = require("../../models")


const createTypeDeLit = async (data) => {
    let typeDeLit = await typeDeLitModel.create(data)
    return typeDeLit ? true : false
}



const getTypeDeLitById = async (id) => {
    let typedelit = await typeDeLitModel.findById(id)
    console.log(typedelit);
    return typedelit
}

const getAllTypeDeLit = async () => {
    let typedelits = await typeDeLitModel.find()
    console.log(typedelits);
    return typedelits
}


const deleteTypeDeLit = async (id) => {
    let typedelit= await typeDeLitModel.bulkWrite([
        {
            deleteOne: {
                filter: {_id: id}
            }
        }
    ])

}

const updateTypeDeLit = async (data) => {
    let {id} = data
    let chambre = await typeDeLitModel.bulkWrite([
        {
            updateOne: {
                filter: {_id:id},
                update: data
            }
        }
    ])
}






module.exports = {
    createTypeDeLit,
    getTypeDeLitById,
    getAllTypeDeLit,
    deleteTypeDeLit,
    updateTypeDeLit
}