import { Contact } from './type';
import { readContacts, writeContacts } from './readWrite';

// export function editContact(name: string, newPhone: string): void {
//   const contacts = readContacts();
//   const index = contacts.findIndex(c => c.name === name);
//   if (index !== -1) {
//     contacts[index].phone = newPhone;
//     writeContacts(contacts);
//   } else {
//     console.log('Contact not found.');
//   }
// }

////////////
export function editContact(editName: string, newName: string, newPhone: string): void {
    try {
        const contacts = readContacts();
        const index = contacts.findIndex(c => c.name === editName);
        if (index !== -1) {
          contacts[index].name = newName;
          contacts[index].phone = newPhone;
          writeContacts(contacts);
          console.log('Contact updated');
        } else {
          console.log('Contact not found.');
        }
      } catch (error) {
        console.error('Failed to edit contact:', error);
      }
}



