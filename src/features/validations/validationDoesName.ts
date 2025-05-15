import { readContacts } from "../../core/readContacts";

export function validationDoesName(name: string): boolean {
    try {
      return Boolean(readContacts().find(c => c.name === name));
    } catch (error) {
      console.error('Error checking contact existence:', error);
      return false;
    }
  }

