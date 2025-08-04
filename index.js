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
  res.render("./index.ejs", {
    title:
      "itesar.cz Jaroslav Tesař | Tvorba webových stránek Prostějov, Olomouc, Přerov",
  });
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
  res.render("contact.ejs", {
    title: "itesar.cz Jaroslav Tesař | Kontaktní formulář",
  });
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
  res.render("basic-package.ejs", {
    title:
      "itesar.cz Jaroslav Tesař | Internetové stránky Prostějov, Olomouc, Přerov",
  });
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
  res.render("standard-package.ejs", {
    title:
      "itesar.cz Jaroslav Tesař | Webové aplikace Prostějov, Olomouc, Přerov",
  });
});

app.get("/about", (req, res) => {
  // Log the visitor
  const visit = {
    url: req.originalUrl,
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
    referrer: req.get("Referer") || "Direct",
    userAgent: req.get("User-Agent"),
  };
  logger.info(visit);
  res.render("about.ejs", {
    title: "itesar.cz Jaroslav Tesař | Vzdělání a zkušenosti",
  });
});

app.get("/udemy-certificate", (req, res) => {
  res.render("certificate-udemy.ejs", {
    title: "itesar.cz Jaroslav Tesař | Full-stack Web Developer kurz",
  });
});

app.get("/online-marketing-completed", (req, res) => {
  res.render("online-marketing-completed.ejs", {
    title: "itesar.cz Jaroslav Tesař | Online marketing absolvován",
  });
});

app.get("/online-marketing-qualification-1", (req, res) => {
  res.render("online-marketing-qualification-1.ejs", {
    title: "itesar.cz Jaroslav Tesař | Online marketing kvalifikace",
  });
});

app.get("/online-marketing-qualification-2", (req, res) => {
  res.render("online-marketing-qualification-2.ejs", {
    title: "itesar.cz Jaroslav Tesař | Online marketing kvalifikace",
  });
});

app.get("/mentoring", (req, res) => {
  res.render("mentoring.ejs", {
    title: "itesar.cz Jaroslav Tesař | Mentoring, konzultace a poradenství",
  });
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

app.listen(port, () => {
  //console.log(`Server running on port ${port}`);
  logger.info(`Server running on port ${port}`);
});
