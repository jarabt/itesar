import express from "express";
import winston from "winston";
import env from "dotenv";
import nodemailer from "nodemailer";
import { articles } from "./src/articles.js";

const app = express();
env.config();
const port = process.env.APP_PORT;
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  // Log the visitor
  const visit = {
    url: req.originalUrl,
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    referrer: req.get("Referer") || "Direct",
    userAgent: req.get("User-Agent"),
  };
  logger.info(visit);
  res.render("./index.ejs");
});

app.get("/color", (req, res) => {
  res.render("color.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/articles", (req, res) => {
  // console.log(articles[0].id);
  res.render("articles.ejs", { articles });
});

app.get("/pricing", (req, res) => {
  res.render("pricing.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Endpoint to handle form submission - this is where the email will be sent
app.post("/message", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: "jarabt@seznam.cz", // sender address
      to: process.env.EMAIL_RECEIVER, // list of receivers
      subject: "Message from itesar.cz website", // Subject line
      // text: req.body.message, // plain text body
      html: `<b>Sender's name: </b>${req.body.name}<br><b>Sender's email: </b>${req.body.email}<br><b>Message: </b>${req.body.message}`, // html body
    });
    logger.info(info);
  } catch (err) {
    logger.error(err);
  }
  res.redirect("/");
});

app.get("/:url", (req, res) => {
  const url = req.params.url;
  console.log(url);
  const article = articles.find((item) => item.url === url);
  console.log(article);
  res.render("article-item.ejs", { article });
});

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
