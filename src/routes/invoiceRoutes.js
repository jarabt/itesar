import { Router } from "express";
import { listInvoices, showAddInvoice, addInvoice, showInvoicePdf } from "../controllers/invoiceController.js";

const router = Router();

router.get("/invoices", listInvoices);
router.get("/invoices/add", showAddInvoice);
router.get("/invoices/:id/pdf", showInvoicePdf);
router.post("/invoices", addInvoice);

export default router;
