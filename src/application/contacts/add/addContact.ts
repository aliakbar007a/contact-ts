import { FileContactRepository } from '../../../infrastructure/repositories/fileContactRep';
import { Contact } from '../../../domain/type';


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


