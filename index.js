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
  res.render("contact.ejs", {
    title: "itesar.cz Jaroslav Tesař | Kontaktní formulář",
    description:
      "Máte zájem o tvorbu webových stránek, aplikací nebo online poradenství? Kontaktujte mě pomocí kontaktního formuláře.",
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
    description:
      "Základní balíček tvorby webových stránek zahrnuje internetovou prezentaci s až 5 sekcemi, responzivní design a základní SEO optimalizaci.",
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
    description:
      "Standardní balíček tvorby webových stránek zahrnuje webovou aplikaci s jednou funkcionalitou (s možností rozšíření na více), responzivní design a základní SEO optimalizaci.",
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
    description:
      "Jmenuji se Jaroslav Tesař a jsem webový vývojář z Prostějova. Mám zkušenosti s tvorbou webových stránek a aplikací, online marketingem a SEO optimalizací.",
  });
});

app.get("/udemy-certificate", (req, res) => {
  res.render("certificate-udemy.ejs", {
    title: "itesar.cz Jaroslav Tesař | Full-stack Web Developer kurz",
    description:
      "Certifikát o absolvování kurzu Full-Stack Web Development s React a Node.js na platformě Udemy.",
  });
});

app.get("/online-marketing-completed", (req, res) => {
  res.render("online-marketing-completed.ejs", {
    title: "itesar.cz Jaroslav Tesař | Online marketing absolvován",
    description:
      "Certifikát o absolvování kurzu Online Marketing na Akademii vzdělávání online s.r.o.",
  });
});

app.get("/online-marketing-qualification-1", (req, res) => {
  res.render("online-marketing-qualification-1.ejs", {
    title: "itesar.cz Jaroslav Tesař | Online marketing kvalifikace",
    description:
      "Certifikát o získání kvalifikace v online marketingu na Akademii vzdělávání online s.r.o. - první strana.",
  });
});

app.get("/online-marketing-qualification-2", (req, res) => {
  res.render("online-marketing-qualification-2.ejs", {
    title: "itesar.cz Jaroslav Tesař | Online marketing kvalifikace",
    description:
      "Certifikát o získání kvalifikace v online marketingu na Akademii vzdělávání online s.r.o. - druhá strana.",
  });
});

app.get("/mentoring", (req, res) => {
  res.render("mentoring.ejs", {
    title: "itesar.cz Jaroslav Tesař | Mentoring, konzultace a poradenství",
    description:
      "Nabízím mentoring, konzultace a poradenství v oblasti tvorby webových stránek, aplikací a online marketingu.",
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
