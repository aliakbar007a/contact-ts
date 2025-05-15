import { Contact } from '../../../core/type';
import { readContacts } from '../../../core/readContacts';
import { writeContacts } from '../../../core/writeContact';

export function addContact(newContact: Contact): void {
    try {
        const contacts = readContacts();
        contacts.push(newContact);
        writeContacts(contacts);
        console.log("contact added");
      } catch (error) {
        console.error('Failed to add contact:', error);
      }
}


