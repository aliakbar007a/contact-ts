import { addContact } from '../../contactServices/addContact/addContact';
import { askName } from '../../../ui/askName';
import { askPhone } from '../../../ui/askPhone';

export async function handleAdd(): Promise<void> {
  const name = await askName();
  const phone = await askPhone();
  
  addContact({ name, phone });
}