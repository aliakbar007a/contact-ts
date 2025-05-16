import { updateContact } from '../../../core/type';
import { readContacts } from '../../../core/readContacts';
import { writeContacts } from '../../../core/writeContact';


export function editContact( Contact: updateContact): boolean {
  try {
    const contacts = readContacts();
    const contact = contacts.find(c => c.name === Contact.preName);

    if (!contact) {
      return false;
    }

    contact.name = Contact.newName;
    contact.phone = Contact.newPhone;

    writeContacts(contacts);
    return true;
    
  } catch (error) {
    console.error('Failed to edit contact:', error);
    return false;
  }
}

