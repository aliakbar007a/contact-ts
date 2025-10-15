
import { Contact } from "../../domain/type";
import { readContacts } from "../../infrastructure/persistence/readContacts";


export async function validateDuplicates(newContact: Contact): Promise<void> {
  const allContacts = await readContacts();

  const duplicate = allContacts.find(
    (c: Contact) =>  c.phone === newContact.phone
  );

  if (duplicate) {
    throw new Error("مخاطب با این شماره از قبل وجود دارد.");
  }
}
