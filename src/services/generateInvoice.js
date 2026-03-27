import PDFDocument from "pdfkit";
import config from "../config/environment.js";

export default function generateInvoice(data, stream) {
  const doc = new PDFDocument({ size: "A4", margin: 50 });
  doc.pipe(stream);

  doc.registerFont("Regular", "fonts/Roboto-Regular.ttf");
  doc.registerFont("Bold", "fonts/Roboto-Bold.ttf");

  const leftCol = 70;
  const rightCol = 330;
  const pageWidth = doc.page.width - 100;
  const supplier = config.supplier;

  // Header
  doc.font("Bold").fontSize(14).text(supplier.title, 50, 50);
  doc.font("Regular").fontSize(10).text(supplier.subtitle, 50, 68);

  // Invoice title
  doc.font("Bold").fontSize(14).text(`FAKTURA č. ${data.invoiceNumber}`, 50, 110);
  doc.font("Regular").fontSize(12).text("(Neplátce DPH)", 400, 110, { align: "right", width: 145 });

  // Supplier / Customer headers
  let y = 160;
  doc.font("Regular").fontSize(10);
  doc.text("DODAVATEL:", leftCol, y);
  doc.text("ODBĚRATEL:", rightCol, y);

  // Supplier details
  y += 25;
  doc.text(supplier.name, leftCol, y);
  doc.text(data.customer.name, rightCol, y);
  y += 18;
  doc.text(`IČO: ${supplier.ico}`, leftCol, y);
  doc.text(`IČO: ${data.customer.ico}`, rightCol, y);

  y += 30;
  doc.text("Adresa místa podnikání:", leftCol, y);
  doc.text("Adresa:", rightCol, y);
  y += 15;
  doc.text(supplier.address, leftCol, y);
  doc.text(data.customer.address, rightCol, y);
  y += 15;
  doc.text(`${supplier.postalCode} ${supplier.city}`, leftCol, y);
  doc.text(`${data.customer.postalCode} ${data.customer.city}`, rightCol, y);

  y += 20;
  doc.text(`E-mail: ${supplier.email}`, leftCol, y);
  doc.text(`E-mail: ${data.customer.email || ""}`, rightCol, y);
  y += 15;
  doc.text(`Telefon: ${supplier.phone}`, leftCol, y);
  doc.text(`Telefon: ${data.customer.phone || ""}`, rightCol, y);

  // Payment details
  y += 40;
  doc.text("Platební údaje:", leftCol, y);
  y += 18;
  doc.text(`Číslo účtu: ${supplier.bankAccount}`, leftCol, y);
  doc.text(`Variabilní symbol: ${data.invoiceNumber}`, rightCol, y);
  y += 15;
  doc.text(`Forma úhrady: ${supplier.paymentMethod}`, leftCol, y);
  doc.text(`Měna: ${supplier.currency}`, rightCol, y);

  y += 25;
  doc.text(`Datum vystavení: ${data.issueDate}`, leftCol, y);
  doc.text(`Datum zdanitelného plnění: ${data.taxDate}`, rightCol, y);
  y += 15;
  doc.text(`Splatnost: ${data.dueDate}`, leftCol, y);

  // Separator
  y += 30;
  doc.moveTo(leftCol, y).lineTo(leftCol + pageWidth - 20, y).stroke();

  // Items
  y += 20;
  doc.text("Položky:", leftCol, y);
  y += 18;

  let total = 0;
  data.items.forEach((item, i) => {
    const priceStr = `${item.price.toLocaleString("cs-CZ")},- Kč`;
    doc.text(`${i + 1}) ${item.description}`, leftCol, y);
    doc.text(priceStr, 400, y, { width: 130, align: "right" });
    total += item.price;
    y += 18;
  });

  // Totals
  y += 15;
  doc.text("Součet:", leftCol, y);
  doc.text(`${total.toLocaleString("cs-CZ")},- Kč`, 400, y, { width: 130, align: "right" });

  y += 25;
  doc.font("Bold").text("Celkem k úhradě:", leftCol, y);
  doc.text(`${total.toLocaleString("cs-CZ")},- Kč`, 400, y, { width: 130, align: "right" });

  // Note
  y += 35;
  doc.font("Regular").text("Poznámka:", leftCol, y);
  y += 15;
  doc.text("Nejsem plátce DPH.", leftCol, y);

  doc.end();
}
