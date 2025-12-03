import { Request, Response } from "express";
import { result } from "../../../shared/result";
import { editContact } from "../../../application/contacts/edit/editContact";

export async function updateContact(req: Request, res: Response): Promise<Response> {
  try {
    const token = req.params.token;
    await editContact(token, req.body);
    return result.success(res, null, "response.message", 200);

  } catch (error: any) {
    return result.error(
      res,
      "خطا در ویرایش مخاطب: " + (error?.message ?? String(error)),
      400
    );
  } 
}
