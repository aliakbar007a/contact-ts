import { writeAllContacts } from "../../../infrastructure/persistence/writeContact";
import { findContactByToken, deleteToken } from "../../tokenServices/tokenService";

export async function deleteContact(token: string): Promise<void> {
  const { contacts, index } = await findContactByToken(token);

  contacts.splice(index, 1);
  await writeAllContacts(contacts);

  deleteToken(token);
}