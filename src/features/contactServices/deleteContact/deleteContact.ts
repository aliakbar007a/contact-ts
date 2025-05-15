import { readContacts } from '../../../core/readContacts';
import { writeContacts } from '../../../core/writeContact';


export function deleteContact(name: string): void {
  try {
    const contacts = readContacts();
    const index =  contacts.findIndex(c => c.name === name);

    if (index === -1) {
      console.log('Contact not found.');
      return;
    }

    contacts.splice(index, 1);
    writeContacts(contacts);
    console.log('Contact deleted successfully.');

  } catch (error) {
    console.error('Failed to delete :', error);
  }
}