import { Contact } from './type';
import { readContacts } from './readContacts';
import { writeContacts } from './writeContact';

export function editContact(editName: string, newName: string, newPhone: string): void {
    try {
        const contacts = readContacts();
        const index = contacts.findIndex(c => c.name === editName);
        if (index !== -1) {
          contacts[index].name = newName;
          contacts[index].phone = newPhone;
          writeContacts(contacts);
          console.log('Contact updated');
        } 
      } catch (error) {
        console.error('Failed to edit contact:', error);
      }
}

export function findName(editName: string): boolean{
  try {
    const contacts = readContacts();
    const index = contacts.findIndex(c => c.name === editName);
    if (index === -1) {
      console.log('Contact not found.');
      return false;
    } 
    return true
  } catch (error) {
    console.error('Failed to edit contact:', error);
    return false
  }
}

