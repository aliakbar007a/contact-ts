import { readContacts } from "../../infrastructure/persistence/readContacts";

export function validDoesName(name: string): boolean {
    try {
      return Boolean(readContacts().find(c => c.name === name));
    } catch (error) {
      console.error('Error checking contact existence:', error);
      return false;
    }
  }

