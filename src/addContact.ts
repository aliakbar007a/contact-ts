import { Contact } from './type';
import { readContacts, writeContacts } from './readWrite';

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


