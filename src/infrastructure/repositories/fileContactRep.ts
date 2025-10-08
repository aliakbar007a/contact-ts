import { Contact } from "../../domain/type";
import { readContacts } from "../persistence/readContacts";
import { writeAllContacts, writeContact } from "../persistence/writeContact";

export class FileContactRepository {
  async read(): Promise<Contact[]> {
    return await readContacts();
  }

  async writeAll(contacts: Contact[]): Promise<void> {
    await writeAllContacts(contacts);
  }

  async add(newContact: Contact): Promise<void> {
    await writeContact(newContact);
  }
}

// یک نمونه singleton برای استفاده در همه‌ی قسمت‌ها
export const contactRepository = new FileContactRepository();