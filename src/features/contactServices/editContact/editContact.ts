import { updateContact } from '../../../core/type';
import { readContacts } from '../../../core/readContacts';
import { writeContacts } from '../../../core/writeContact';


export function editContact( Contact: updateContact): void {
  try {
    const contacts = readContacts();
    const contact = contacts.find(c => c.name === Contact.preName);

    if (!contact) {
      console.log('Contact not found.');
      return;
    }

    contact.name = Contact.newName;
    contact.phone = Contact.newPhone;

    writeContacts(contacts);
    console.log('Contact updated successfully.');
  } catch (error) {
    console.error('Failed to edit contact:', error);
  }
}

