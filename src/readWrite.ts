import fs from 'fs';
import { filePath } from './filePath';
import { Contact } from './type';

export function readContacts(): Contact[] {
  try {
     const data = fs.readFileSync(filePath, 'utf-8');
     return JSON.parse(data);
   } catch {
     return [];
   }
 }
 


export function writeContacts(contacts: Contact[]): void {
  try {
    fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to write contacts:', error);
  }
}


