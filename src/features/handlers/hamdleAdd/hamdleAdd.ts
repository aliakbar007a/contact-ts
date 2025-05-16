import { addContact } from '../../contactServices/addContact/addContact';
import { askName } from '../../../ui/askName/askName';
import { askPhone } from '../../../ui/askPhone/askPhone';

export async function handleAdd(): Promise<void> {
  const name = await askName();
  const phone = await askPhone();
  
  const isAdded =  addContact({ name, phone });
   if(isAdded){
    console.log("contact added");
  }
}