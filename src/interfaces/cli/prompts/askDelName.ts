import { validDoesName } from "../../../application/validations/validDoesName";
import { askQuestion } from "../../../shared/inputHandler";


export async function askDelName(): Promise<string > {
  const delName = await askQuestion('Enter name to delete: ');
 
  if (!validDoesName(delName)) {
    console.log('Contact not found.');
    return askDelName ();
  }
  return delName;
}