
const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

// Display all books
async function loadBooks() {
    const response = await fetch("/books");
    const books = await response.json();

    bookList.innerHTML = "";

    books.forEach(book => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
            <td>
                <button class="edit" onclick="editBook(${book.id})">Edit</button>
                <button class="delete" onclick="deleteBook(${book.id})">Delete</button>
            </td>
        `;

        bookList.appendChild(row);
    });
}

// Add a new book
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        price: Number(document.getElementById("price").value)
    };

    await fetch("/books", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    });

    form.reset();
    loadBooks();
});

// Edit a book
async function editBook(id) {
    const response = await fetch("/books/" + id);
    const book = await response.json();

    const title = prompt("Enter new title:", book.title);
    if (title === null) return;

    const author = prompt("Enter new author:", book.author);
    if (author === null) return;

    const price = prompt("Enter new price:", book.price);
    if (price === null) return;

    await fetch("/books/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            author: author,
            price: Number(price)
        })
    });

    loadBooks();
}

// Delete a book
async function deleteBook(id) {
    if (confirm("Do you want to delete this book?")) {
        await fetch("/books/" + id, {
            method: "DELETE"
        });

        loadBooks();
    }
}

// Load books when page opens
loadBooks();
