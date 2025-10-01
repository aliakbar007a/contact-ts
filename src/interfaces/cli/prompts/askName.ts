import { askQuestion } from "../../../shared/inputHandler";
import { isValidName } from "../../../application/validations/validName";

export async function askName(): Promise<string > {
  const name = await askQuestion('Enter name: ');
  if (!isValidName(name)) {
    console.log('Invalid name.');
    return askName ();
  }
  return name;
}