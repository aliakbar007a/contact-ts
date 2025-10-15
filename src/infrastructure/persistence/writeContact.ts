import fs from 'fs';
import { filePath } from '../data/filePath';
import { Contact } from '../../domain/type';
import { clearCache, readContacts } from './readContacts';
import { resolve } from 'path';

export async function writeAllContacts(contacts: Contact[] ): Promise<void> {
  try { 
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf-8');
    clearCache();
  } catch (error) {
    console.error('Failed to write contacts:', error);
  }
}


export async function writeContact(newContact: Contact): Promise<void> {
  const contacts = await readContacts();
  contacts.push(newContact);
  fs.writeFileSync(resolve(filePath), JSON.stringify(contacts, null, 2), 'utf-8');
  clearCache();
}