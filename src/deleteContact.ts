import { Contact } from './type';
import { readContacts, writeContacts } from './readWrite';

export function deleteContact(name: string): void {
    try {
        const contacts = readContacts();
        const filtered = contacts.filter(c => c.name !== name);
        if (filtered.length === contacts.length) {
          console.log('Contact not found.');
        } else {
          writeContacts(filtered);
          console.log("contact deleted");
        }
      } catch (error) {
        console.error('Failed to delete contact:', error);
      }
}



