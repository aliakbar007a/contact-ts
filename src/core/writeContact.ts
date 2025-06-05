import fs from 'fs';
import { filePath } from './filePath';
import { Contact } from './type';
import { readContacts } from './readContacts';
import { resolve } from 'path';

export function writeAllContacts(contacts: Contact[] ): void {
  try { 
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf-8');
    
  } catch (error) {
    console.error('Failed to write contacts:', error);
  }
}


export function writeContact(newContact: Contact): void {
  const contacts = readContacts();
  contacts.push(newContact);
  fs.writeFileSync(resolve(filePath), JSON.stringify(contacts, null, 2), 'utf-8');
}