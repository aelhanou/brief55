const { userModel } = require("../../models")




const createUser = async (data) => {
    let user = await userModel.create(data)
    return user.id
}



module.exports = {
    createUser
}