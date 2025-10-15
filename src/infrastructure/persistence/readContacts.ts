import fs from 'fs';
import { filePath } from '../data/filePath';
import { Contact } from '../../domain/type';

let cache : Contact[] | null = null;

function readFileData(): string {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '[]';
  }
}

function parseContacts(data: string): Contact[] {
  try {
    return JSON.parse(data);
  } catch {
    return []; 
  }
}

export async function readContacts(): Promise<Contact[]> {
  if(cache) return cache;
  const data = readFileData();
  const contacts = parseContacts(data);
  cache = contacts;
  return contacts;
}

export function clearCache(): void {
  cache = null
}
