import { validationDoesName } from '../features/validations/validationDoesName';
import { askQuestion } from '../core/inputHandler';


export async function askDelName(): Promise<string > {
  const delName = await askQuestion('Enter name to delete: ');
 
  if (!validationDoesName(delName)) {
    console.log('Contact not found.');
    return askDelName ();
  }
  return delName;
}