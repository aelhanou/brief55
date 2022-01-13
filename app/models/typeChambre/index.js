const { Schema, model } = require("mongoose")

const typeDeChambreSchema = new Schema(
    {
        typeDeChambre: { type: String },
        typeDeVue: { type: String },
        idTypeDeLit: {
            type: Schema.Types.ObjectId,
            ref: "typeDeLits"
        }
    },
    { timestamps: true }
)

const typeDeChambreModel = model("typeDeChambre", typeDeChambreSchema)

module.exports = {
    typeDeChambreModel
}