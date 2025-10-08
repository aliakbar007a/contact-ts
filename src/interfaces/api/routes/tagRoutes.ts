import { Router } from "express";
import { updateTag } from "../controllers/tagController";

const router = Router();

router.put("/:name", updateTag);

export default router;