import { Router } from "express";
import { showAddCustomer, addCustomer } from "../controllers/customerController.js";

const router = Router();

router.get("/customers/add", showAddCustomer);
router.post("/customers", addCustomer);

export default router;
