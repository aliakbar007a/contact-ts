import fs from 'fs';
import path from 'path';
import { Contact } from './type';

const filePath = path.join(__dirname, 'contact.json');

export function saveContact(contact: Contact): void {
  let contacts: Contact[] = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    contacts = JSON.parse(data);
  }

  contacts.push(contact);

  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf-8');
}
