import fs from 'fs';
import path from 'path';
import { Contact } from './type';

const filePath = path.join(__dirname, 'contact.json');

export function loadContacts(): Contact[] {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function saveContacts(contacts: Contact[]): void {
  fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2), 'utf-8');
}

export function addContact(contact: Contact): void {
  const contacts = loadContacts();
  contacts.push(contact);
  saveContacts(contacts);
  console.log('Contact added.');
}

export function editContact(editName: string, newName: string, newPhone: string): void {
  const contacts = loadContacts();
  const index = contacts.findIndex(c => c.name === editName);
  if (index !== -1) {
    contacts[index].name = newName;
    contacts[index].phone = newPhone;
    saveContacts(contacts);
    console.log('Contact updated');
  } else {
    console.log('Contact not found');
  }
}

export function deleteContact(name: string): void {
  const contacts = loadContacts();
  const filtered = contacts.filter(c => c.name !== name);
  if (filtered.length === contacts.length) {
    console.log('Contact not found.');
  } else {
    saveContacts(filtered);
    console.log('Contact deleted.');
  }
}