import { editContact } from './editContact';

import { input } from './input';
import { editContactResult } from './output';

export async function handleEdit(): Promise<void> {
  const Input = await input();
  const isEdited = editContact(Input);
  editContactResult(isEdited)
}