# Online Book Management System

## Project Overview

The Online Book Management System is a web-based application developed to manage book records efficiently. It provides a simple and user-friendly interface that allows users to add, view, update, and delete book details.

The application uses Node.js and Express.js for backend operations and JSON file storage to maintain book information.

## Features

- Add new books with title, author, and price.
- View all available books.
- Edit existing book details.
- Delete book records.
- Store book information in a JSON file.
- User-friendly web interface.

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Data Storage
- JSON

## Project Structure

```text
Bookmanagement/
│
├── data/
│   └── books.json
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/Deeksha245/BookManagement.git
```

### Step 2: Navigate to the Project Folder

```bash
cd BookManagement
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Server

```bash
node server.js
```

### Step 5: Open the Application

Open your browser and visit:

http://localhost:3000

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | /books | Retrieve all books |
| GET | /books/:id | Retrieve a book by ID |
| POST | /books | Add a new book |
| PUT | /books/:id | Update book details |
| DELETE | /books/:id | Delete a book |

## Data Storage

The application stores book records in `data/books.json`.

Each book contains:
- Book ID
- Book Title
- Author Name
- Price

## Future Enhancements

- Search books by title or author.
- Add book categories.
- Integrate a database.
- Implement user authentication.
- Improve responsive design.

## Author

**Deeksha G Naik**

GitHub: https://github.com/Deeksha245

## Project Purpose

This project was developed for educational purposes to gain practical experience in frontend development, backend development, REST APIs, and file-based data management.

---

**Thank you for visiting my project!**
