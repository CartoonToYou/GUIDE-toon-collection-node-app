const path = require("path");
const express = require("express");
const url = require("url");

const router = express.Router();

router.get("/games", (req, res) => {
  // console.log("path: ", path);
  // console.log("__dirname: ", __dirname);
  // console.log(
  //   "games.html path: ",
  //   path.join(__dirname, "..", "views", "games.html")
  // );
  // res.sendFile(path.join(__dirname, "..", "views", "games.html"));

  const formattedUrl = url.format({
    protocol: req.protocol,
    host: req.get("host"),
  });

  res.render("games", {
    title: "Games",
    pathname: "/games",
    url: formattedUrl,
  });
});

module.exports = router;
