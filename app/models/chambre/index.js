const { Schema, model } = require("mongoose")


const chambreSchema = new Schema(
    {
        nomDeCHambre: { type: String },
        prixDeChambre: { type: String },
        capacityDeChambre: { type: String },
        prix: {type: String},
        idTypeDeChambre: {
            type: Schema.Types.ObjectId,
            ref : "typeDeChambre"
        }
    },
    { timestamps: true }
)

const chambreModel = model("chambre", chambreSchema)

module.exports = {
    chambreModel
}