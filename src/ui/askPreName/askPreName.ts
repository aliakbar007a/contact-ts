import { validationDoesName } from '../../features/validations/validationDoesName';
import { askQuestion } from '../../core/inputHandler';


export async function askPreName(): Promise<string > {
  const preName = await askQuestion('Enter name to edit: ');
  if (!validationDoesName(preName)) {
    console.log('Contact not found.');
    return askPreName ();
  }
  return preName;
}