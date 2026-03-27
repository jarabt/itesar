import process from "node:process";

process.loadEnvFile();

const config = {
  app: {
    port: process.env.APP_PORT,
  },
  database: {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  },
  supplier: {
    title: process.env.SUPPLIER_TITLE,
    subtitle: process.env.SUPPLIER_SUBTITLE,
    name: process.env.SUPPLIER_NAME,
    ico: process.env.SUPPLIER_ICO,
    address: process.env.SUPPLIER_ADDRESS,
    postalCode: process.env.SUPPLIER_POSTAL_CODE,
    city: process.env.SUPPLIER_CITY,
    email: process.env.SUPPLIER_EMAIL,
    phone: process.env.SUPPLIER_PHONE,
    bankAccount: process.env.SUPPLIER_BANK_ACCOUNT,
    paymentMethod: process.env.SUPPLIER_PAYMENT_METHOD,
    currency: process.env.SUPPLIER_CURRENCY,
  },
};

export default config;
