const path = require("path");
const hbs = require("hbs");

const express = require("express");
const app = express();

// static
const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));


// template engine
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
// set template engine
app.set("view engine", "hbs");
app.set("views", templatePath);

hbs.registerPartials(partialsPath);

app.get("/", (req, res) => {
  //   res.send("Hello from express");
  res.render("index", { name: "Abdullah" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "About" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening at port ${PORT}`));
