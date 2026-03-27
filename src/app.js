import express from "express";
import routes from "./routes/index.js";
import { pool } from "./config/database.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routes);

export default app;
