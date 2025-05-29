import { deleteContact } from './deleteContact';
import { askDelName } from '../../../ui/askDelName';
import { deleteContactResult } from './output';

export async function handleDelete(): Promise<void> {
  const delName = await askDelName();
  const isDeleted = deleteContact(delName);
  deleteContactResult(isDeleted)
}

