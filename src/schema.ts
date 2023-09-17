import mongoose from 'mongoose'

// schema definition
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export const ContactModel = mongoose.model('Contact', contactSchema)

// type definition
export type ContactType = {
    name: string;
    phone: number;
}
  