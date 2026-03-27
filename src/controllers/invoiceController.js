import { createInvoice, getAllCustomers, getAllInvoices, getInvoiceById } from "../services/invoiceService.js";
import generateInvoice from "../services/generateInvoice.js";

export async function listInvoices(req, res) {
  const invoices = await getAllInvoices();
  res.render("invoices/index.ejs", { invoices });
}

export async function showAddInvoice(req, res) {
  const customers = await getAllCustomers();
  res.render("invoices/add.ejs", { customers });
}

export async function addInvoice(req, res) {
  const { invoiceNumber, customerId, issueDate, taxDate, dueDate } = req.body;

  const descriptions = [].concat(req.body.description || []);
  const prices = [].concat(req.body.price || []);

  const items = descriptions
    .map((description, i) => ({ description, price: parseInt(prices[i]) }))
    .filter((item) => item.description && !isNaN(item.price));

  await createInvoice(invoiceNumber, customerId, issueDate, taxDate, dueDate, items);
  res.redirect("/invoices");
}

export async function showInvoicePdf(req, res) {
  const invoice = await getInvoiceById(req.params.id);
  if (!invoice) return res.status(404).send("Faktura nenalezena");

  const formatDate = (d) => new Date(d).toLocaleDateString("cs-CZ");

  const data = {
    invoiceNumber: invoice.invoice_number,
    issueDate: formatDate(invoice.issue_date),
    taxDate: formatDate(invoice.tax_date),
    dueDate: formatDate(invoice.due_date),
    customer: {
      name: invoice.customer_name,
      ico: invoice.customer_ico,
      address: invoice.customer_address,
      postalCode: invoice.customer_postal_code,
      city: invoice.customer_city,
      email: invoice.customer_email,
      phone: invoice.customer_phone,
    },
    items: invoice.items,
  };

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `inline; filename="faktura-${invoice.invoice_number}.pdf"`);
  generateInvoice(data, res);
}
