import { askQuestion } from "../../../shared/inputHandler";
import { isValidName } from "../../../application/validations/validName";

export async function askTag(): Promise<string > {
  const tag = await askQuestion('Enter tag: ');
  return tag;
}