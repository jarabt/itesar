import { Router } from "express";
import homeRoutes from "./homeRoutes.js";
import customerRoutes from "./customerRoutes.js";
import invoiceRoutes from "./invoiceRoutes.js";

const router = Router();

router.use(homeRoutes);
router.use(customerRoutes);
router.use(invoiceRoutes);

export default router;
