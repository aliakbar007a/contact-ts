import { editContact } from '../../contactServices/editContact/editContact';
import { askPreName } from '../../../ui/askPreName';
import { askName } from '../../../ui/askName';
import { askPhone } from '../../../ui/askPhone';

export async function handleEdit(): Promise<void> {
  const preName = await askPreName();
  const newName = await askName();
  const newPhone = await askPhone();

  editContact({ preName, newName, newPhone});
  
}