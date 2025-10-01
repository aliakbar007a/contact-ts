import { validDoesName } from "../../../application/validations/validDoesName";
import { askQuestion } from "../../../shared/inputHandler";


export async function askPreName(): Promise<string > {
  const preName = await askQuestion('Enter name to edit: ');
  if (!validDoesName(preName)) {
    console.log('Contact not found.');
    return askPreName ();
  }
  return preName;
}