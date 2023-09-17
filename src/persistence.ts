import * as mongoose from 'mongoose';
import { ContactModel, ContactType } from './schema'


// create
export const createContact = async (payload: ContactType) => {
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
export const readContact = async (id: number) => {
    await mongoose.connect(Bun.env.DATABASE as string)
    const foundContact: ContactType = await ContactModel.find({ _id: id })

    return foundContact 
    ? new Response(foundContact) 
    : new Response('Operation failed. Please try again.')
}

// update
export const updateContact = async () => {
    await mongoose.connect(Bun.env.DATABASE as string)
    const foundContact = await ContactModel.find()

    return foundContact 
    ? new Response(foundContact.map( e => e.name as string)) 
    : new Response('Operation failed. Please try again.')
}

// delete