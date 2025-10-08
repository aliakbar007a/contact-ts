import { contactRepository } from "../../../infrastructure/repositories/fileContactRep";
import { Contact, ContactResponse } from "../../../domain/type";
import { validContactExists } from "../../validations/validContactExists";
import { validateName } from "../../validations/validName";
import { validatePhone } from "../../validations/validPhone";
import { validateDuplicates } from "../../validations/validDuplicates";

export async function editContact(
  name: string,
  updatedData: Partial<Contact> 
): Promise<ContactResponse> {
    const contacts = await contactRepository.read();
    const { contact, index } = await validContactExists(name);

    if (!contact || index === -1) {
     throw new Error("مخاطب مورد نظر یافت نشد.");
    }
    if (updatedData.name) validateName(updatedData.name);
    if (updatedData.phone) validatePhone(updatedData.phone);
    if (
      (updatedData.phone && updatedData.phone !== contact.phone)
    ) {
      await validateDuplicates(updatedData as Contact);
    }
  
    const updatedContact: Contact = {
      ...contact,
      ...updatedData,
    };

    contacts[index] = updatedContact;

    await contactRepository.writeAll(contacts);

    return {
      success: true,
      message: "مخاطب با موفقیت ویرایش شد.",
      data: updatedContact,
    };
  
}
