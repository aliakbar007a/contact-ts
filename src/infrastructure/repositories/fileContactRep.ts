import { Contact } from '../../domain/type';
import { ContactRepository } from '../../domain/type';
import { readContacts } from '../persistence/readContacts';
import { writeAllContacts } from '../persistence/writeContact';
import { writeContact } from '../persistence/writeContact';

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
