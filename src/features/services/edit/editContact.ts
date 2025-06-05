import { updateContact } from '../../../core/type';
import { FileContactRepository } from '../../../core/fileContactRep';


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

