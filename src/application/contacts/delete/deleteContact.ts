import { BaseResponse } from "../../../domain/type";
import { contactRepository } from "../../../infrastructure/repositories/fileContactRep";
import { validContactExists } from "../../validations/validContactExists";

export async function deleteContact(name: string): Promise<BaseResponse> {
  
    const contacts = await contactRepository.read();

    const { contact, index } = await validContactExists(name);

    if (!contact || index === -1) {
      throw new Error("مخاطب مورد نظر یافت نشد.");
    }

    contacts.splice(index, 1);

    await contactRepository.writeAll(contacts);

    return {
      success: true,
      message: `مخاطب "${name}" با موفقیت حذف شد.`,
    };
  
}
