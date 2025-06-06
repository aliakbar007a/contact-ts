import fs from 'fs';
import { filePath } from './filePath';
import { Contact } from './type';

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

export function readContacts(): Contact[] {
  const data = readFileData();
  return parseContacts(data);
}


