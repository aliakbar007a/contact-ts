import { askName } from "./askName";
import { askQuestion } from "../core/inputHandler";
import { isValidPhone } from "../features/validations/validationPhone";

export async function askPhone(): Promise<string > {
  const phone = await askQuestion('Enter phone: ');
  if (!isValidPhone(phone)) {
    console.log('Invalid phone number.');
    return askPhone();
  }
  return phone;
}