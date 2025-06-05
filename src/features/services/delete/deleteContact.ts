import { FileContactRepository } from '../../../core/fileContactRep';



export function deleteContact(name: string): boolean {
  const repsitory = new FileContactRepository 
  try {
    const contacts = repsitory.read();
    const index =  contacts.findIndex(c => c.name === name);

    if (index === -1) {
      return false;
    }
    contacts.splice(index, 1);
    repsitory.writeAll(contacts);
    return true;

  } catch (error) {
    console.error('Failed to delete :', error);
    return false;
  }
}