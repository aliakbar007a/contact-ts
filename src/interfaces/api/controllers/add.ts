import { addContact as addContactUseCase } from "../../../application/contacts/add/addContact";
import { Request, Response } from "express";
import { result } from "../../../shared/result";
import { appendFileSync } from "node:fs";
export async function addContact(req: Request, res: Response) {
  try {

    await addContactUseCase(req.body);
     const token = createToken()
        appendFileSync('./src/infrastructure/data/tokens.txt', `${token} ${req.body.name}\n`)
        return result.success(
        res,
        { ...req.body, token },
        "مخاطب اضافه شد",
        201
      );

  }  catch (error: any) {
    return result.error(
      res, "خطا در افزودن مخاطب: " + (error?.message ?? String(error)), 500
    );
  }
}

function createToken() {
    return Math.random().toString(36).substring(2, 15)
}