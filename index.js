import express from "express";
import winston from "winston";
import env from "dotenv";
import nodemailer from "nodemailer";

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
// app.use((req, res, next) => {
//   const visit = {
//     timestamp: new Date().toISOString(),
//     ip: req.ip,
//     url: req.originalUrl,
//     userAgent: req.get("User-Agent"),
//     referrer: req.get("Referer") || "Direct",
//   };
//   console.log(visit); // or save to DB
//   next();
// });

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

app.get("/contact", (req, res) => {
  // Log the visitor
  const visit = {
    url: req.originalUrl,
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    referrer: req.get("Referer") || "Direct",
    userAgent: req.get("User-Agent"),
  };
  logger.info(visit);
  res.render("contact.ejs");
});

app.get("/basic-package", (req, res) => {
  // Log the visitor
  const visit = {
    url: req.originalUrl,
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    referrer: req.get("Referer") || "Direct",
    userAgent: req.get("User-Agent"),
  };
  logger.info(visit);
  res.render("basic-package.ejs");
});

app.get("/standard-package", (req, res) => {
  // Log the visitor
  const visit = {
    url: req.originalUrl,
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    referrer: req.get("Referer") || "Direct",
    userAgent: req.get("User-Agent"),
  };
  logger.info(visit);
  res.render("standard-package.ejs");
});

app.post("/message", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: '"Plynoservis 👻" <plynoservis@plynoservis.cz>', // sender address
      to: process.env.EMAIL_RECEIVER, // list of receivers
      subject: "Message form plynoservis website", // Subject line
      text: req.body.message, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });
    console.log(info);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.listen(port, () => {
  //console.log(`Server running on port ${port}`);
  logger.info(`Server running on port ${port}`);
});
