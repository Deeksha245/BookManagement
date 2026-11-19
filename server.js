
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

const filePath = path.join(__dirname, "data", "books.json");

function getBooks() {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function saveBooks(books) {
    fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
}

// Get all books
app.get("/books", (req, res) => {
    res.json(getBooks());
});

// Get book by ID
app.get("/books/:id", (req, res) => {
    const books = getBooks();
    const book = books.find(b => b.id == req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.json(book);
});

// Add a book
app.post("/books", (req, res) => {
    const books = getBooks();

    const newBook = {
        id: books.length ? Math.max(...books.map(b => b.id)) + 1 : 1,
        title: req.body.title,
        author: req.body.author,
        price: Number(req.body.price)
    };

    books.push(newBook);
    saveBooks(books);

    res.status(201).json(newBook);
});

// Update a book
app.put("/books/:id", (req, res) => {
    const books = getBooks();
    const index = books.findIndex(b => b.id == req.params.id);

    if (index === -1) return res.status(404).json({ message: "Book not found" });

    books[index] = {
        id: Number(req.params.id),
        title: req.body.title,
        author: req.body.author,
        price: Number(req.body.price)
    };

    saveBooks(books);
    res.json(books[index]);
});

// Delete a book
app.delete("/books/:id", (req, res) => {
    let books = getBooks();
    books = books.filter(b => b.id != req.params.id);

    saveBooks(books);
    res.json({ message: "Book deleted successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
