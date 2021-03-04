let books = [
  { id: 1, name: 'C++', author: 'Moishe' },
  { id: 2, name: 'JS', author: 'Kipi' },
  { id: 3, name: 'PHP', author: 'Ugi' },
];

const express = require('express');
const bp = require('body-parser');

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/api/books', (request, reponse) => {
  reponse.json(books);
});

app.get('/api/books/:bookId', (request, reponse) => {
  const id = request.params.bookId;

  const result = books.find((book) => +book.id === +id);
  console.log('result', result);

  reponse.json(result);
});

app.post('/api/books', (request, response) => {
  const newBook = {
    id: books.length + 1,
    name: request.body.name,
    author: request.body.author,
  };

  books.push(newBook);
  response.json(books);
});

app.put('/api/books/:bookId', (request, reponse) => {
  const id = request.params.bookId;
  console.log(books);

  books = books.map((book) => {
    if (+book.id === +id) {
      book.name = request.body.name;
      book.author = request.body.author;
      return book;
    } else {
      return book;
    }
  });
  reponse.json(books);
});

app.listen(4000, () => console.log('listen on port 4000'));
