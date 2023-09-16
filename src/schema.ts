import * as mongoose from 'mongoose'

// schema definition
const contactSchema = new mongoose.Schema(
    {
        name: { type: String },
        phone: { type: String },
    }
)

// model definition
export const ContactModel = mongoose.model('Contact', contactSchema)

// type definition
// export type Contact = typeof ContactModel

export interface Contact {
    name: string,
    phone: number,
}