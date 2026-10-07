const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Book records
let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        year: 1988
    },
    {
        id: 2,
        title: "Wings of Fire",
        author: "A.P.J. Abdul Kalam",
        year: 1999
    }
];

// GET - Display all books
app.get("/books", (req, res) => {
    res.json(books);
});

// POST - Add a new book
app.post("/books", (req, res) => {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
        return res.status(400).json({
            message: "Please enter all book details"
        });
    }

    const newBook = {
        id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
        title: title,
        author: author,
        year: year
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

// PUT - Update book details
app.put("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const book = books.find(book => book.id === id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    const { title, author, year } = req.body;

    book.title = title;
    book.author = author;
    book.year = year;

    res.json(book);
});

// DELETE - Delete a book
app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const bookExists = books.some(book => book.id === id);

    if (!bookExists) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    books = books.filter(book => book.id !== id);

    res.json({
        message: "Book deleted successfully"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});