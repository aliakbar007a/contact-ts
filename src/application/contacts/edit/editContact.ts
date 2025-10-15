import { Contact, ContactResponse } from "../../../domain/type";
import { validContactExists } from "../../validations/validContactExists";
import { validateName } from "../../validations/validName";
import { validatePhone } from "../../validations/validPhone";
import { validateDuplicates } from "../../validations/validDuplicates";
import { readContacts } from "../../../infrastructure/persistence/readContacts";
import { writeAllContacts } from "../../../infrastructure/persistence/writeContact";

export async function editContact(
  name: string,
  updatedData: Partial<Contact> 
): Promise<void> {
    const contacts = await readContacts();
    const { contact, index } = await validContactExists(name);

    if (!contact || index === -1) {
     throw new Error("مخاطب مورد نظر یافت نشد.");
    }
    if (updatedData.name) validateName(updatedData.name);
    if (updatedData.phone) validatePhone(updatedData.phone);
    if (
      (updatedData.phone && updatedData.phone !== contact.phone)
    ) {
      await validateDuplicates(updatedData as Contact);
    }
  
    const updatedContact: Contact = {
      ...contact,
      ...updatedData,
    };

    contacts[index] = updatedContact;

    await writeAllContacts(contacts);

    
  
}
