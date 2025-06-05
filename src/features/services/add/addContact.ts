import { FileContactRepository } from '../../../core/fileContactRep';
import { Contact } from '../../../core/type';


export function addContact(newContact: Contact): boolean {
  const repository = new FileContactRepository
    try {
      
      repository.add(newContact)
        return true;
      } catch (error) {
        console.error('Failed to add contact:', error);
        return false;
      }
}


