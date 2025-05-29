import { askQuestion } from '../core/inputHandler';
import { isValidName } from '../features/validations/validName';

export async function askTag(): Promise<string > {
  const tag = await askQuestion('Enter tag: ');
  return tag;
}