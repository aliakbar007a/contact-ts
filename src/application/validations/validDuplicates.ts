// import { readContacts } from "../../infrastructure/persistence/readContacts";


// export function validDuplicate (phone : string) : Boolean {
//     try{
//         const contacts = readContacts();
//         const isDuplicate =  contacts.some(
//             contact => contact.phone === phone
//         )
//         return isDuplicate
//     }catch (error) {
//        console.error('Failed to check duplicate :', error);
//        return false;
//   }
// }
  

import { Contact } from "../../domain/type";
import { contactRepository } from "../../infrastructure/repositories/fileContactRep";

export async function validateDuplicates(newContact: Contact): Promise<void> {
  const allContacts = await contactRepository.read();

  const duplicate = allContacts.find(
    (c: Contact) =>  c.phone === newContact.phone
  );

  if (duplicate) {
    throw new Error("مخاطب با این شماره از قبل وجود دارد.");
  }
}
//c.name === newContact.name || c.phone === newContact.phone