const { Schema, model } = require("mongoose")


const typeDeLitSchema = new Schema(
    {
        typeDeLit: { type: String },        
    },
    { timestamps: true }
)

const typeDeLitModel = model("typeDeLits", typeDeLitSchema)

module.exports = {
    typeDeLitModel
}