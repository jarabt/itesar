import process from "node:process";

process.loadEnvFile();

const config = {
  app: {
    port: process.env.APP_PORT,
  },
};

export default config;
