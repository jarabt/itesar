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
};

export default config;
