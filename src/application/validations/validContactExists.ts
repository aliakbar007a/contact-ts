// import { readContacts } from "../../infrastructure/persistence/readContacts";

// export function validDoesName(name: string): boolean {
//     try {
//       return Boolean(readContacts().find(c => c.name === name));
//     } catch (error) {
//       console.error('Error checking contact existence:', error);
//       return false;
//     }
//   }
///////////////////////////////////////////////////////////
// import { contactRepository } from "../../infrastructure/repositories/fileContactRep";
// export const validContactExists = async (
//     name: string
// ): Promise<{ success: boolean; message?: string; contact?: any }> => {
//   const contacts = await contactRepository.read();
//   const contact = contacts.find(c => c.name === name);

//   if (!contact) {
//     return { 
//       success: false, 
//       message: "Contact not found" 
//     };
//   }

//   return { 
//     success: true, 
//     contact 
//   };
// };

////////////////////////////////////
// import { contactRepository } from "../../infrastructure/repositories/fileContactRep";
// import { Contact } from "../../domain/type";

// export async function validContactExists(
 
//   name: string
// ): Promise<{Contact: Contact | null; index:number}> {
//   const contacts = await contactRepository.read();

//   const index = contacts.findIndex(
//     (c) => c.name.toLowerCase() === name.toLowerCase()
//   );

//   return index ;
// }
//////
import { contactRepository } from "../../infrastructure/repositories/fileContactRep";
import { Contact } from "../../domain/type";

export async function validContactExists(
  name: string
): Promise<{ contact: Contact | null; index: number }> {
  const contacts = await contactRepository.read();

  const index = contacts.findIndex(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  const contact = index !== -1 ? contacts[index] : null;

  return { contact, index };
}
