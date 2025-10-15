
import { Contact, ContactResponse } from "../../../domain/type";
import { validateDuplicates } from "../../validations/validDuplicates";
import { validateName } from "../../validations/validName";
import { validatePhone } from "../../validations/validPhone";
import { writeContact } from "../../../infrastructure/persistence/writeContact";
export async function addContact(
  newContact: Contact
): Promise<void> {
  validateName(newContact.name)
  validatePhone(newContact.phone)
  await validateDuplicates(newContact)
  await writeContact(newContact)
}
