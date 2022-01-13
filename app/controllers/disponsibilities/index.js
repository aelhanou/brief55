const { disponsibillitieModel } = require("../../models")




const isAvailable = async (data) => {
    let available = await disponsibillitieModel.create(data)
    console.log(available);
    // return reservation ? true : false
}

const checkavailableChambre = async (debit, fin) => {
    try {
        let available = await disponsibillitieModel.findOne({ $or : [{ "reservationDeDebit": { "$lte": fin }, "reservationDeFin": { "$gte": debit } }] })
        return available

    } catch (error) {
        throw error
    }
}


const getAllAvailableChambre = async () => {
    return await disponsibillitieModel.find()

}



module.exports = {
    isAvailable,
    checkavailableChambre,
    getAllAvailableChambre
}