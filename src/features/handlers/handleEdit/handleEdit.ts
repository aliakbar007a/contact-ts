import { editContact } from '../../contactServices/editContact/editContact';
import { askPreName } from '../../../ui/askPreName/askPreName';
import { askName } from '../../../ui/askName/askName';
import { askPhone } from '../../../ui/askPhone/askPhone';

export async function handleEdit(): Promise<void> {
  const preName = await askPreName();
  const newName = await askName();
  const newPhone = await askPhone();

  editContact({ preName, newName, newPhone});
  
}