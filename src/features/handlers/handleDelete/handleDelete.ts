import { deleteContact } from '../../contactServices/deleteContact/deleteContact';
import { askDelName } from '../../../ui/askDelName';

export async function handleDelete(): Promise<void> {
  const delName = await askDelName();
  console.log(delName);
  
  deleteContact(delName);
}