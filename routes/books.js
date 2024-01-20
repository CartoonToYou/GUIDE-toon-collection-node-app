const express = require("express");

const router = express.Router();

const { PORT } = require("../constants");

router.get("/books", (req, res) => {
  res.render("books", { title: "Books", pathname: "/books" });
  // res.send(`
  // <html>

  //   <h1>Books Page</h1>
  //   <button>
  //     <a href='http://localhost:${PORT}/'>
  //       HOME
  //     </a>
  //   </button>
  //   <ol>

  //     <li>
  //       <a href="http://localhost:${PORT}/books/harry-potter">
  //         Harry potter
  //       </a>
  //     </li>

  //     <li>
  //       <a href="http://localhost:${PORT}/books/roblox">
  //         Roblox
  //       </a>
  //     </li>

  //     <li>
  //       <a href="http://localhost:${PORT}/books/lord-of-the-ring">
  //         Lord of the ring
  //       </a>
  //     </li>

  //   </ol>
  // </html>
  // `);
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
