import { validDoesName } from '../features/validations/validDoesName';
import { askQuestion } from '../core/inputHandler';


export async function askPreName(): Promise<string > {
  const preName = await askQuestion('Enter name to edit: ');
  if (!validDoesName(preName)) {
    console.log('Contact not found.');
    return askPreName ();
  }
  return preName;
}