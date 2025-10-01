import { updateContact } from '../../../domain/type';
import { FileContactRepository } from '../../../infrastructure/repositories/fileContactRep';


export function editContact(Contact: updateContact): boolean {
   const repsitory = new FileContactRepository
  try {
    const contacts = repsitory.read();
    const contact = contacts.find(c => c.name === Contact.preName);

    if (!contact) {
      return false;
    }

    contact.name = Contact.newName;
    contact.phone = Contact.newPhone;
    contact.tag = Contact.newTag;

    repsitory.writeAll(contacts);
    return true;
    
  } catch (error) {
    console.error('Failed to edit contact:', error);
    return false;
  }
}

// import { FileContactRepository } from "../../../infrastructure/repositories/fileContactRep";
// import { Contact } from "../../../domain/type";

// export async function editContact(
//   name: string,
//   newData: Partial<Contact>
// ): Promise<{ success: boolean; message?: string; data?: Contact }> {
//   const repository = new FileContactRepository
//   try {
//     const contacts = await repository.read();
//     const index = contacts.findIndex(c => c.name === name);

//     if (index === -1) {
//       return { success: false, message: "Contact not found" };
//     }

//     const updatedContact = { ...contacts[index], ...newData };
//     contacts[index] = updatedContact;

//     await repository.writeAll(contacts);

//     return { success: true, message: "contact updated", data: updatedContact };
//   } catch (error) {
//     console.error("Failed to edit contact:", error);
//     return { success: false, message: "Could not edit contact" };
//   }
// }
