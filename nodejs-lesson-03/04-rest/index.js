const books = [
    { id: 1, name: "C++", author: "Moishe" },
    { id: 2, name: "JS", author: "Kipi" },
    { id: 3, name: "PHP", author: "Ugi" },
];

const exspress = require('express');
const app = exspress();
const omri = 'hala bala'
app.get('/api/books/', (request, response) => {
    response.json(books);
    response.send(omri);

});

app.get('/api/books/:bookId', (request, response) => {
    const id = +request.params.bookId;
    const resulte = books.find(book => book.id === id);
    response.json(resulte);

});
app.listen(4000, () => console.log('Listen On Port 4000'))