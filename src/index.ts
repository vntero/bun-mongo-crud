import * as mongoose from 'mongoose';
import { ContactModel } from './schema';

// connect to db
await mongoose.connect(Bun.env.DATABASE as string);

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
