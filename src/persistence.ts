import { Contact, ContactModel } from "./schema"

// create
export const cc = async (payload: Contact) => {
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

// update

// delete