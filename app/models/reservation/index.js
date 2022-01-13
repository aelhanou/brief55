const { Schema, model } = require("mongoose")


const reservationSchema = new Schema(
    {
        nbrDeAdulte: { type: String },
        nbrDeEnfant: { type: String },
        dateDeDebit: { type: Date },
        dateDeFin: { type: Date },
        idUser: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        idChambre: {
            type: Schema.Types.ObjectId,
            ref: "chambre"
        }
    },
    { timestamps: true }
)

const reservationModel = model("Reservation", reservationSchema)

module.exports = {
    reservationModel
}