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
  const visit = {
    timestamp: new Date().toISOString(),
    ip: req.ip,
    url: req.originalUrl,
    userAgent: req.get("User-Agent"),
    referrer: req.get("Referer") || "Direct",
  };
  //logger.info("New visit", { visit });
  logger.info(req.headers["x-forwarded-for"] || req.socket.remoteAddress);
  res.render("./index.ejs");
});

app.get("/basic-package", (req, res) => {
  res.render("basic-package.ejs");
});

app.listen(port, () => {
  //console.log(`Server running on port ${port}`);
  logger.info(`Server running on port ${port}`);
});
