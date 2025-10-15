import { Request, Response } from "express";
import { addContact as addContactUseCase } from "../../../application/contacts/add/addContact";
import { deleteContact as deleteContactUseCase } from "../../../application/contacts/delete/deleteContact";
import { editContact } from "../../../application/contacts/edit/editContact";
import { result } from "../../../shared/result";
import { readContacts } from "../../../infrastructure/persistence/readContacts";

export async function getAllContacts(res: Response) {
  try {
    const contacts = await readContacts();
    return result.success(res, contacts, "Fetched all contacts");
  } catch (error: any) {
    return result.error(
      res,
      "خطا در دریافت مخاطبین: " + (error?.message ?? String(error)),
      500
    );
  }
}

export async function addContact(req: Request, res: Response) {
  try {
    await addContactUseCase(req.body);
    return result.success(res, req.body,"مختاطب اضافه شد", 201);
  }  catch (error: any) {
    return result.error(
      res, "خطا در افزودن مخاطب: " + (error?.message ?? String(error)), 500
    );
  }
}

export async function deleteContact(req: Request, res: Response): Promise<Response> {
  try {
    await deleteContactUseCase(req.params.name);
    return result.success(res, null, 'مختاطب دلیت شد' , 200);
} catch (error: any) {
    return result.error(
      res,
      "خطا در حذف مخاطب: " + (error?.message ?? String(error)),
      400
    );
  }
}

export async function updateContact(req: Request, res: Response): Promise<Response> {
  try {
    const { name } = req.params;
    await editContact(name, req.body);
 
    return result.success(res, null, "response.message", 200);
  } catch (error: any) {
    return result.error(
      res,
      "خطا در ویرایش مخاطب: " + (error?.message ?? String(error)),
      400
    );
  } 
}
