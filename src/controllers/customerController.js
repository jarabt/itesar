import { createCustomer } from "../services/customerService.js";

export function showAddCustomer(req, res) {
  res.render("customers/add.ejs");
}

export async function addCustomer(req, res) {
  const { name, ico, address, postalCode, city, email, phone } = req.body;
  await createCustomer(name, ico, address, postalCode, city, email, phone);
  res.redirect("/invoices");
}
