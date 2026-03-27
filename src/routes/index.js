import { Router } from "express";
import homeRoutes from "./homeRoutes.js";

const router = Router();

router.use(homeRoutes);

export default router;
