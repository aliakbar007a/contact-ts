
import { Contact, ContactResponse } from "../../../domain/type";
import { validateDuplicates } from "../../validations/validDuplicates";
import { validateName } from "../../validations/validName";
import { validatePhone } from "../../validations/validPhone";
import { contactRepository } from "../../../infrastructure/repositories/fileContactRep";
export async function addContact(
  newContact: Contact
): Promise<ContactResponse> {
  
    validateName(newContact.name)
    validatePhone(newContact.phone)
    await validateDuplicates(newContact)

    await contactRepository.add(newContact)
    return {
    success: true,
    message: `مخاطب "${newContact.name}" با موفقیت اضافه شد.`,
    data: newContact,
  };
  
}
