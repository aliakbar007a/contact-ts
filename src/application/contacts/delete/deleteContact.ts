
import { readContacts } from "../../../infrastructure/persistence/readContacts";
import { writeAllContacts } from "../../../infrastructure/persistence/writeContact";
import { validContactExists } from "../../validations/validContactExists";

export async function deleteContact(name: string): Promise<void> {
  
    const contacts = await readContacts();

    const { contact, index } = await validContactExists(name);

    if (!contact || index === -1) {
      throw new Error("مخاطب مورد نظر یافت نشد.");
    }

    contacts.splice(index, 1);

    await writeAllContacts(contacts);

   
}
