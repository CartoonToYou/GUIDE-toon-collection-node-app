const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/games", (req, res) => {
  // console.log("path: ", path);
  // console.log("__dirname: ", __dirname);
  // console.log(
  //   "games.html path: ",
  //   path.join(__dirname, "..", "views", "games.html")
  // );
  // res.sendFile(path.join(__dirname, "..", "views", "games.html"));

  res.render("games", { title: "Games", pathname: "/games" });
});

module.exports = router;
