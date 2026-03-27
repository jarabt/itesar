import pg from "pg";
import config from "./environment.js";

// connect-pg-simple requires a Pool or conString, not a single Client
const pool = new pg.Pool(config.database);

pool.on("connect", () => {
  // console.log("PostgreSQL pool connected");
});

pool.on("error", (err) => {
  console.error("Unexpected PG pool error", err);
  process.exit(1);
});

export default pool;
