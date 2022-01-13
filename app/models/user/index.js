const { Schema, model } = require("mongoose")


const userSchema = new Schema(
    {
        prenom: { type: String },
        nom: { type: String },
        tel: { type: String },
        email: { type: String },
        country: { type: String },
        nbrDeLaCarte: { type: String },
        expireCarte: { type: String }

    },
    { timestamps: true }
)

const userModel = model("User", userSchema);

module.exports = {
    userModel
}
