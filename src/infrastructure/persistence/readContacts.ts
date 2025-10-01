import fs from 'fs';
import { filePath } from '../data/filePath';
import { Contact } from '../../domain/type';

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


