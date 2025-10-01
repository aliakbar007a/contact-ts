import { Router } from "express";

import { handleAdd } from "../../../domain/modle/handleAdd";
import { handleDelete } from "../../../domain/modle/handleDelete";
import { handleEdit } from "../../../domain/modle/handleEdit";
import { handleShow } from "../../../domain/modle/handleShow";

const router = Router();

router.get("/", handleShow);
router.post("/", handleAdd);
router.delete("/:name", handleDelete);
router.put("/:name", handleEdit); 

export default router;