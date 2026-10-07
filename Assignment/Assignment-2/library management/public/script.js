// Display all books
async function loadBooks() {

    const response = await fetch("/books");

    const books = await response.json();

    const bookList = document.getElementById("bookList");

    bookList.innerHTML = "";

    if (books.length === 0) {

        bookList.innerHTML =
            '<p class="no-books">No books available.</p>';

        return;
    }

    books.forEach(book => {

        bookList.innerHTML += `
            <div class="book-card">

                <h3>${book.title}</h3>

                <p><strong>Author:</strong> ${book.author}</p>

                <p><strong>Year:</strong> ${book.year}</p>

                <button
                    class="edit"
                    onclick="editBook(${book.id}, '${book.title}', '${book.author}', ${book.year})">
                    Edit
                </button>

                <button
                    class="delete"
                    onclick="deleteBook(${book.id})">
                    Delete
                </button>

            </div>
        `;
    });
}


// Add or Update Book
async function saveBook() {

    const id = document.getElementById("bookId").value;

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;

    if (!title || !author || !year) {

        alert("Please enter all book details.");

        return;
    }

    const bookData = {
        title: title,
        author: author,
        year: year
    };

    let response;

    // UPDATE
    if (id) {

        response = await fetch(`/books/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(bookData)
        });

    }

    // ADD
    else {

        response = await fetch("/books", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(bookData)
        });
    }

    if (response.ok) {

        alert(id
            ? "Book updated successfully!"
            : "Book added successfully!"
        );

        clearForm();

        loadBooks();

    } else {

        alert("Something went wrong.");
    }
}


// Edit Book
function editBook(id, title, author, year) {

    document.getElementById("bookId").value = id;

    document.getElementById("title").value = title;

    document.getElementById("author").value = author;

    document.getElementById("year").value = year;

    document.getElementById("formTitle").innerText =
        "Update Book";

    document.getElementById("saveButton").innerText =
        "Update Book";

    document.getElementById("cancelButton").style.display =
        "inline-block";
}


// Delete Book
async function deleteBook(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this book?");

    if (!confirmDelete) {
        return;
    }

    const response = await fetch(`/books/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {

        alert("Book deleted successfully!");

        loadBooks();

    } else {

        alert("Unable to delete book.");
    }
}


// Cancel editing
function cancelEdit() {

    clearForm();
}


// Clear form
function clearForm() {

    document.getElementById("bookId").value = "";

    document.getElementById("title").value = "";

    document.getElementById("author").value = "";

    document.getElementById("year").value = "";

    document.getElementById("formTitle").innerText =
        "Add New Book";

    document.getElementById("saveButton").innerText =
        "Add Book";

    document.getElementById("cancelButton").style.display =
        "none";
}


// Load books when page opens
loadBooks();