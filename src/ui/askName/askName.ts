import { askQuestion } from '../../core/inputHandler';
import { isValidName } from '../../features/validations/validationName';

export async function askName(): Promise<string > {
  const name = await askQuestion('Enter name: ');
  if (!isValidName(name)) {
    console.log('Invalid name.');
    return askName ();
  }
  return name;
}