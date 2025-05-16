import { readContacts } from '../../../core/readContacts';
import { writeContacts } from '../../../core/writeContact';


export function deleteContact(name: string): boolean {
  try {
    const contacts = readContacts();
    const index =  contacts.findIndex(c => c.name === name);

    if (index === -1) {
      console.log('Contact not found.');
      return false;
    }

    contacts.splice(index, 1);
    writeContacts(contacts);
    console.log('Contact deleted successfully.');
    return true;
  } catch (error) {
    console.error('Failed to delete :', error);
    return false;
  }
}