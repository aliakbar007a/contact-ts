
import { addContact } from '../../application/contacts/add/addContact';
import { input } from '../../application/contacts/add/input';
import { addContactResult } from '../../interfaces/cli/presenters/addPresenters';
export async function handleAdd(): Promise<void> {
  const contact = await input();
  const isAdded =  addContact(contact);
  addContactResult(isAdded)
 
}

