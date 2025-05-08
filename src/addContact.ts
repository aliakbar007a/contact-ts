import { Contact } from './type';
import { readContacts } from './readContacts';
import { writeContacts } from './writeContact';

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


