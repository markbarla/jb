const {books} = require("../data/booksData");

exports.home = (req, res) => {
  res.status(300).redirect("/api/books");
};

exports.books = (req, res, next) => {
  res.json(books);
};

exports.getBook = (req, res) => {
  
  const bookId = books.find((book) => book.id == req.params.id);
  res.json(bookId);
};

exports.sendBook = (req, res) => {
  if (typeof req.body.name === `string`) {
    books.push({ id: books.length + 1, name: req.body.name });
    res.json(books);
  } else {
    res.send("no change where made");
  }
};

exports.updateBook = (req, res) => {
    const bookId = +req.params.id;
    const book = books.find((book) => book.id === bookId); //any change will be referance
    if (typeof req.body.name === `string`) {
      book.name = req.body.name;
      res.json(books);
    } else res.send("no change where made");
  }