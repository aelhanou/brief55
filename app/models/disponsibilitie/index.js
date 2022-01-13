const { Schema, model } = require("mongoose")


const disponsibillitieasSchema = new Schema(
    {
        status: { type: String },
        reservationDeDebit: { type: Date },
        reservationDeFin: { type: Date },
        idChambre: {
            type: Schema.Types.ObjectId,
            ref: "chambre"
        }
    },
    { timestamps: true }
)

const disponsibillitieModel = model("Disponsibillitie", disponsibillitieasSchema)

module.exports = {
    disponsibillitieModel
}