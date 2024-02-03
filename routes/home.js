// const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  // res.send(`
  //   <html>
  //     <h1>
  //       Hello World From Express App!
  //     </h1>
  //     <div style='display:flex; flex-direction:column; align-items: flex-start; gap: 8px;'>
  //       <button>
  //         <a href="http://localhost:${PORT}/books">BOOKS</a>
  //       </button>
  //       <button>
  //         <a href="http://localhost:${PORT}/games">GAMES</a>
  //       </button>
  //     </div>
  //   </html>
  // `);
  res.render("home", { title: "My Collections", pathname: "/" });
});

// module.exports = router;
// module.exports.router = router
// exports.router = router

module.exports = router;
