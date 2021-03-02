const router = require("express").Router();
const booksController = require("../controler/booksControler");

router.get("/", booksController.home);

router.get("/api/books", booksController.books);

router.get("/api/books/:id", booksController.getBook);

router.post("/api/books", booksController.sendBook);

router.put("/api/books/:id", booksController.updateBook);

module.exports = router;
