import express from "express";
import winston from "winston";

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
const app = express();
const port = 3000;
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

app.listen(port, () => {
  //console.log(`Server running on port ${port}`);
  logger.info(`Server running on port ${port}`);
});
