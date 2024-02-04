const express = require("express");
const url = require("url");

const router = express.Router();

router.get("/books", (req, res) => {
  const formattedUrl = url.format({
    protocol: req.protocol,
    host: req.get("host"),
  });
  res.render("books", {
    title: "Books",
    pathname: "/books",
    url: formattedUrl,
  });
});

router.get("/books/:bookName", (req, res) => {
  console.log("req: ", req);
  const bookName = req.params.bookName;
  res.send(`
    <html>
      <h1>Book with ${bookName} Page</h1>
      <button style='margin-right: 8px;'>
        <a href='http://localhost:${PORT}/'>
          HOME
        </a>
      </button>/
      <button style='margin-left: 8px;'>
        <a href='http://localhost:${PORT}/books'>
          Books
        </a>
      </button>
    </html>
  `);
});

module.exports = router;
