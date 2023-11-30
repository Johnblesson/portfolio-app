import { Router } from "express";
const router = Router();

import { 
    index,
    createContactForm,
    getAllContactForms
} from "../controllers/controllers.js";

router.get("/", index)
router.post("/contact", createContactForm);
router.get("/getcontacts", getAllContactForms);

export default router;