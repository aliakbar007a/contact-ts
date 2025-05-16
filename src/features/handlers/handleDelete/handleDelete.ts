import { deleteContact } from '../../contactServices/deleteContact/deleteContact';
import { askDelName } from '../../../ui/askDelName/askDelName';

export async function handleDelete(): Promise<void> {
  const delName = await askDelName();
  const isDeleted = deleteContact(delName);
  
  if(isDeleted){
    console.log('Contact deleted successfully.');
  }else{
    console.log('Contact not found.');
  }
  
}