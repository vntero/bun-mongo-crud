import * as mongoose from 'mongoose'

// ----- schema definition -----
const contactSchema = new mongoose.Schema(
    {
        name: { type: String },
        phone: { type: String },
    }
)

// ----- model definition -----
export const contactModel = mongoose.model('Contact', contactSchema)