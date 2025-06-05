import { Contact } from './type';
import { ContactRepository } from './type';
import { readContacts } from './readContacts';
import { writeAllContacts } from './writeContact';
import { writeContact } from './writeContact';

export class FileContactRepository implements ContactRepository {
   read(): Contact[] {
    return readContacts();
  }

  writeAll(contacts: Contact[]): void {
    writeAllContacts(contacts);
  }

  add(newContact: Contact): void {
    writeContact(newContact)
  }
}
