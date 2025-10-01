import { editContact } from '../../application/contacts/edit/editContact';

import { input } from '../../application/contacts/edit/input';
import { editContactResult } from '../../interfaces/cli/presenters/editePresenters';

export async function handleEdit(): Promise<void> {
  const Input = await input();
  const isEdited = editContact(Input);
  editContactResult(isEdited)
}