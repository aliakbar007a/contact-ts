import { Contact } from "../../../domain/type";
import { validateName } from "../../validations/validName";
import { validatePhone } from "../../validations/validPhone";
import { validateDuplicates } from "../../validations/validDuplicates";
import { writeAllContacts } from "../../../infrastructure/persistence/writeContact";
import { findContactByToken, updateTokenName } from "../../tokenServices/tokenService";

export async function editContact(
  token: string,
  updatedData: Partial<Contact>
): Promise<void> {
  
  const { contacts, index, name } = await findContactByToken(token);

  const contact = contacts[index];

  if (updatedData.name) validateName(updatedData.name);
  if (updatedData.phone) validatePhone(updatedData.phone);

  if (updatedData.phone && updatedData.phone !== contact.phone) {
    await validateDuplicates(updatedData as Contact);
  }

  const updatedContact: Contact = { ...contact, ...updatedData };
  contacts[index] = updatedContact;
  await writeAllContacts(contacts);

  if (updatedData.name) {
    updateTokenName(token, updatedData.name);
  }
}