import { validDoesName } from '../features/validations/validDoesName';
import { askQuestion } from '../core/inputHandler';


export async function askDelName(): Promise<string > {
  const delName = await askQuestion('Enter name to delete: ');
 
  if (!validDoesName(delName)) {
    console.log('Contact not found.');
    return askDelName ();
  }
  return delName;
}