import { Request, Response } from "express";
import { deleteContact as deleteContactUseCase } from "../../../application/contacts/delete/deleteContact";
import { result } from "../../../shared/result";


export async function deleteContact(req: Request, res: Response): Promise<Response> {
  try {
    const token = req.params.token;
    await deleteContactUseCase(token);
    return result.success(res, null, 'مختاطب دلیت شد' , 200);
} catch (error: any) {
    return result.error(
      res,
      "خطا در حذف مخاطب: " + (error?.message ?? String(error)),
      400
    );
  }
}