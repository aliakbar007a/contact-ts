import { readContacts } from "../../core/readContacts";


export function validDuplicate (phone : string) : Boolean {
    try{
        const contacts = readContacts();
        const isDuplicate =  contacts.some(
            contact => contact.phone === phone
        )
        return isDuplicate
    }catch (error) {
       console.error('Failed to check duplicate :', error);
       return false;
  }
}