//Variables
let library = [];

//HTML Elements
var showFormButton = document.getElementById('show_form_button');
var bookForm = document.getElementById('book_form');
var books = document.getElementById('books');
var addBookButton = document.getElementById('add_book_button');
var bookList = document.getElementById('book_list');
var bookTitle = document.getElementById('book_title');
var bookAuthor = document.getElementById('book_author');
var bookPages = document.getElementById('book_pages');
var bookRead = document.getElementById('book_finished');

//Event listeners
showFormButton.addEventListener('click', showForm);
addBookButton.addEventListener('click', checkForm);

// Functions \\

//Shows and hides the form and list of books
function showForm() {
    if(bookForm.style.display === 'none') {
        bookForm.style.display = 'block';
        books.style.display = 'none';
        showFormButton.value = "Hide Form";
    } else {
        bookForm.style.display = 'none';
        books.style.display = 'block';
        showFormButton.value = "Show Form";
        clearForm();
    }
}

function checkForm() {
    //Check if they're empty
    if(bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === '') {
        //Do something here   
    } else {
        //Create a book object and add to library
        addBook();

        //Clear form and switch back to library
        showForm();
        clearForm();
        
    }
}

function clearForm() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.checked = false;
}

function addBook() {
    //Create new object
    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);

    //Add to book list
    bookList.appendChild(book.getBookListItem());
}

// Objects \\

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.getBookListItem = function () {
    //Create book div
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    //Create p elements with information and classes
    let title = document.createElement('p');
    title.textContent = this.title;
    title.classList.add('book_information');

    let author = document.createElement('p');
    author.textContent = this.author;
    author.classList.add('book_information');

    let pages = document.createElement('p');
    pages.textContent = this.pages;
    pages.classList.add('book_information');

    let read = document.createElement('p');
    read.textContent = this.read;
    read.classList.add('book_information');

    //Create div for buttons
    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('book_buttons');

    //Create buttons and add to buttons div
    let finishedButton = document.createElement('input');
    finishedButton.type = 'button';
    finishedButton.value = "Finish";
    finishedButton.classList.add('book_button');

    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = "Delete";
    deleteButton.style 
    deleteButton.classList.add('book_button');

    buttonsDiv.appendChild(finishedButton);
    buttonsDiv.appendChild(deleteButton);

    //Adds everything to book div
    bookDiv.append(title, author, pages, read, buttonsDiv);

    return bookDiv;
}