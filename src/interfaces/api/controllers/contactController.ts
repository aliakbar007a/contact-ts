import { Request, Response } from "express";
import { addContact as addContactUseCase } from "../../../application/contacts/add/addContact";
import { deleteContact as deleteContactUseCase } from "../../../application/contacts/delete/deleteContact";
import { editContact } from "../../../application/contacts/edit/editContact";
import { contactRepository } from "../../../infrastructure/repositories/fileContactRep";
import { result } from "../../../shared/result";

export async function getAllContacts(req: Request, res: Response) {
  try {
    const contacts = await contactRepository.read();
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
    const response = await addContactUseCase(req.body);
  if (!response.success) {
    return result.error(res, response.message, 400);
  }
  return result.success(res, req.body, response.message, 201);
  }  catch (error: any) {
    return result.error(
      res,
      "خطا در افزودن مخاطب: " + (error?.message ?? String(error)),
      500
    );
  }
}

export async function deleteContact(req: Request, res: Response): Promise<Response> {
  try {
    const response = await deleteContactUseCase(req.params.name);
  if (!response.success) {
    return result.error(res, response.message, 404);
  }
  return result.success(res, null, response.message, 200);
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
  const response = await editContact(name, req.body);
  if (!response.success) {
    return result.error(res, response.message, 404);
  }
  return result.success(res, response.data, response.message, 200);
  } catch (error: any) {
    return result.error(
      res,
      "خطا در ویرایش مخاطب: " + (error?.message ?? String(error)),
      400
    );
  } 
}