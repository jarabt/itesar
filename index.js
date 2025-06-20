import express from "express";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use((req, res, next) => {
  const visit = {
    timestamp: new Date().toISOString(),
    ip: req.ip,
    url: req.originalUrl,
    userAgent: req.get("User-Agent"),
    referrer: req.get("Referer") || "Direct",
  };
  console.log(visit); // or save to DB
  next();
});

app.get("/", (req, res) => {
  res.render("./index.ejs");
});

app.get("/basic-package", (req, res) => {
  res.render("basic-package.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
