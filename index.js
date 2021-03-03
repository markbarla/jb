const express = require("express");
const app = express();

const books = [{
        id: 1,
        name: "C++",
        author: "Moishe"
    },
    {
        id: 2,
        name: "JS",
        author: "Kipi"
    },
    {
        id: 3,
        name: "PHP",
        author: "Ugi"
    },
];

// ------------GET-ALL---------------
app.get('/api/books', (req, res) => {
    res.json(books)
});

// ------------GET-ONE---------------
app.get('/api/books/:id', (req, res) => {
    const id = req.params.id
    const book = books.find(books => books.id == id);

    console.log('book you wanted', book)
    res.json({
        message: 'here is the book you are looking for:',
        book
    })
});

// ------------POST---------------
app.post('/api/books/', (req, res) => {

    const book = {
        id: books.length + 1,
        name: 'omri',
        author: 'ben-shalom'
    };
    books.push(book);
    res.json({
        message: 'you have just posted a new book ! ',
        book
    });
})

// ------------PUT---------------
app.put('/api/books/:id', (req, res) => {
    const bookId = books.findIndex(book => book.id === parseInt(req.params.id));

    const updateBook = {
        id: req.params.id,
        name: "yulia",
        author: "bat-shalom"
    }

    if (bookId) {
        books[parseInt(bookId)] = updateBook
        res.json({
            message: `The book with id #${updateBook.id} is updated`,
            books
        });
    } else {
        res.status(404).json({
            message: `Id - ${req.params.id} - not found`
        });
    };
});


app.listen(4000, () => {
    console.log("listen on port 4000")
})