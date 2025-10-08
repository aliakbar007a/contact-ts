import { Router } from "express";
import {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact
} from "../controllers/contactController";

const router = Router();

// گرفتن همه مخاطبین
router.get("/", getAllContacts);

// افزودن مخاطب جدید
router.post("/", addContact);

// ویرایش مخاطب بر اساس نام
router.put("/:name", updateContact);

// حذف مخاطب بر اساس نام
router.delete("/:name", deleteContact);

export default router;