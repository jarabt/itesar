import db from "../config/database.js";

export async function createInvoice(invoiceNumber, customerId, issueDate, taxDate, dueDate, items) {
  const invoiceResult = await db.query(
    "INSERT INTO invoices (invoice_number, customer_id, issue_date, tax_date, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [invoiceNumber, customerId, issueDate, taxDate, dueDate]
  );
  const invoice = invoiceResult.rows[0];

  for (const item of items) {
    await db.query(
      "INSERT INTO invoice_items (invoice_id, description, price) VALUES ($1, $2, $3)",
      [invoice.id, item.description, item.price]
    );
  }

  return invoice;
}

export async function getAllInvoices() {
  const result = await db.query(
    `SELECT i.id, i.invoice_number, c.name AS customer_name,
            i.issue_date, i.due_date,
            COALESCE(SUM(ii.price), 0) AS total_price
     FROM invoices i
     JOIN customers c ON i.customer_id = c.id
     LEFT JOIN invoice_items ii ON i.id = ii.invoice_id
     GROUP BY i.id, i.invoice_number, c.name, i.issue_date, i.due_date
     ORDER BY i.issue_date DESC`
  );
  return result.rows;
}

export async function getInvoiceById(id) {
  const invoiceResult = await db.query(
    `SELECT i.*, c.name AS customer_name, c.ico AS customer_ico,
            c.address AS customer_address, c.postal_code AS customer_postal_code,
            c.city AS customer_city, c.email AS customer_email, c.phone AS customer_phone
     FROM invoices i
     JOIN customers c ON i.customer_id = c.id
     WHERE i.id = $1`,
    [id]
  );
  if (invoiceResult.rows.length === 0) return null;

  const invoice = invoiceResult.rows[0];

  const itemsResult = await db.query(
    "SELECT description, price FROM invoice_items WHERE invoice_id = $1",
    [id]
  );
  invoice.items = itemsResult.rows;

  return invoice;
}

export async function getAllCustomers() {
  const result = await db.query("SELECT id, name FROM customers ORDER BY name");
  return result.rows;
}
