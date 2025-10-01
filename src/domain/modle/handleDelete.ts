import { deleteContact } from '../../application/contacts/delete/deleteContact';
import { askDelName } from '../../interfaces/cli/prompts/askDelName';
import { deleteContactResult } from '../../interfaces/cli/presenters/deletePresenters';

export async function handleDelete(): Promise<void> {
  const delName = await askDelName();
  const isDeleted = deleteContact(delName);
  deleteContactResult(isDeleted)
}

