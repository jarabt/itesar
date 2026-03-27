import db from "../config/database.js";

export async function createCustomer(name, ico, address, postalCode, city, email, phone) {
  const result = await db.query(
    "INSERT INTO customers (name, ico, address, postal_code, city, email, phone) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
    [name, ico, address, postalCode, city, email, phone]
  );
  return result.rows[0];
}
