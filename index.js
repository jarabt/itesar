import express from "express";

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("./partials/header.ejs");
});

app.get("/basic-package", (req, res) => {
  res.render("basic-package.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
