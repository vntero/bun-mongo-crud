// const server = Bun.serve({
//     port: 3000,
//     fetch(request) {
//         return new Response('Welcome to Bun!')
//     }
// })

// console.log(`Listening on port:${server.port}`)

import * as mongoose from 'mongoose';
import { ContactModel } from './schema';

// connect to db
await mongoose.connect('mongodb+srv://vntero:vntero@cluster0.ysxz6.mongodb.net/');

// create new Animal
const contact = new ContactModel({
  name: 'Orwell',
  phone: 987654321,
});
await contact.save()

// read all Animals
const contacts = await ContactModel.find();
console.log("🔥🔥🔥 ~ file: index.ts:25 ~ contacts:", contacts)


// disconnect from db
await mongoose.disconnect()
