import { Contact } from '../../../core/type';
import { readContacts } from '../../../core/readContacts';
import { writeContacts } from '../../../core/writeContact';

export function addContact(newContact: Contact): boolean {
    try {
        const contacts = readContacts();
        contacts.push(newContact);
        writeContacts(contacts);
        return true;
      } catch (error) {
        console.error('Failed to add contact:', error);
        return false;
      }
}


