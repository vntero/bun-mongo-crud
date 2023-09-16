import * as mongoose from 'mongoose';
import { Contact, ContactModel } from "./schema"


// create
export const createContact = async (payload: Contact) => {
    await mongoose.connect(Bun.env.DATABASE as string)
    const contact = new ContactModel({
        name: payload.name,
        phone: payload.phone
    })
    
    const savedContact = await contact.save()
    return savedContact 
    ? new Response(`${savedContact.name} added to your contacts list`) 
    : new Response('Operation failed. Please try again.')
}

// read
export const readContact = async () => {
    await mongoose.connect(Bun.env.DATABASE as string)
   return await ContactModel.find()
}

// update

// delete