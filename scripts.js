//Empty array for the books
let myLibrary = [];

//HTML elements
let booksDiv = document.getElementById('books');
let bookForm = document.getElementById('book_form');
let addBookButton = document.getElementById('add_book_button');
let bookTitle = document.getElementById('book_title');
let bookAuthor = document.getElementById('book_author');
let bookPages = document.getElementById('book_pages');
let bookRead = document.getElementById('book_read');

//Event listeners
addBookButton.addEventListener('click', addBook);

//Display books
myLibrary.forEach(displayBooks);

//Book object constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Adds a book to the library
function addBook() {
    //Create a new book object
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);

    //Add to library
    myLibrary.push(book);

    //Show on screen
    displayBooks(book);
}

//Creates a new p element and then appends to the books div
function displayBooks(item) {
    //Create new p element for now
    let p = document.createElement('p');

    //Set content to the book title
    p.textContent = item.title;

    //Add to the div
    booksDiv.appendChild(p);
}