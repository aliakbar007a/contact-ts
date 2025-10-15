import { Contact } from "../../domain/type";
import { readContacts } from "../../infrastructure/persistence/readContacts";

export async function validContactExists(
  name: string
): Promise<{ contact: Contact | null; index: number }> {
  const contacts = await readContacts();

  const index = contacts.findIndex(
    (c) => c.name.toLowerCase() === name.toLowerCase()
  );

  const contact = index !== -1 ? contacts[index] : null;

  return { contact, index };
}
