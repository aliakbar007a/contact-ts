import fs from 'fs';
import { filePath } from './filePath';
import { Contact } from './type';

export function writeContacts(contacts: Contact[]): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to write contacts:', error);
  }
}
