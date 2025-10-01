import { readContacts } from "../../../infrastructure/persistence/readContacts";

export function getContactList(): string[] {
  try{
    const contacts = readContacts();
  return contacts.map((c, i) => `${i + 1}. ${c.name} - ${c.tag}`);
  }catch (error) {
        console.error('Failed :', error);
        return [];
      }
}