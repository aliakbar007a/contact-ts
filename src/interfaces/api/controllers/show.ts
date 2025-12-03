import { Request, Response } from "express";
import { readContacts } from "../../../infrastructure/persistence/readContacts";
import { result } from "../../../shared/result";

export async function getAllContacts(req: Request, res: Response) {
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