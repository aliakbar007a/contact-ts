import { validDuplicate } from "../features/validations/validDuplicates";
import { askQuestion } from "../core/inputHandler";
import { isValidPhone } from "../features/validations/validPhone";

export async function askPhone(): Promise<string > {
  const phone = await askQuestion('Enter phone: ');
  if (!isValidPhone(phone)) {
    console.log('Invalid phone number.');
    return askPhone();
  }

  if(validDuplicate(phone)) {
    console.log("phone number is exist");
    return askPhone();
  }
  return phone;
}