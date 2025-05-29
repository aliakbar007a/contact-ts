import { validDuplicate } from '../../validations/validDuplicates';
import { addContact } from './addContact';
import { input } from './input';
import { addContactResult } from './outPut';
export async function handleAdd(): Promise<void> {
  const contact = await input();
  const isAdded =  addContact(contact);
  addContactResult(isAdded)
 
}

