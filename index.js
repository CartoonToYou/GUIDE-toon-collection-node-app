const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

const homeRoutes = require("./routes/home");
const bookRoutes = require("./routes/books");
const gameRoutes = require("./routes/games");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(bookRoutes);
app.use(gameRoutes);

// app.get("/", (req, res, next) => {
//   console.log("req: ", req);
//   console.log("Response HTML from url => /");
//   res.send(`
//   <p>Welcome <strong style="text-transform: capitalize;">${req.query.name}</strong>!</p>
// `);
// });

app.get("/:username", (req, res, next) => {
  // console.log("req.params: ", req.params.username);
  // console.log("Response HTML from url => /:username");
  res.send(`
    <h1>Hello ${req.params.username}</h1>
  `);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Start express app listening on port:${port}`);
});
