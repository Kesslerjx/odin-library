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
var errorMessage = document.getElementById('error_message');

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

//Validates the form
function checkForm() {
    //Check if they're empty
    if(bookTitle.value === '' || bookAuthor.value === '' || bookPages.value === '') {
        //Do something here
        errorMessage.textContent = "There was an issue adding the book";   
    } else {
        //Create a book object and add to library
        addBook();

        //Clear form and switch back to library
        showForm();
        clearForm();
        
    }
}

//Clears the form to reset it
function clearForm() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.checked = false;
    errorMessage.textContent = '';
}

//Adds a book to the library
function addBook() {
    //Create new object
    let book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);

    //Add to library
    library.push(book);

    //Add to book list
    updateBookList();
}

//Sets the book to being finished
function finishBook(event) {
    //Get index
    let index = getBookIndex(this);

    //Set to opposite
    if(library[index].read === false) {
        library[index].read = true;
    } else {
        library[index].read = false;
    }

    //Update list
    updateBookList();

}

//Deletes a book
function deleteBook(event) {
    
    //Get index
    let index = getBookIndex(this);

    //Remove book from library and list
    library.pop(index);
    bookList.removeChild(bookList.children[index]);
}

//Gets the index of the book in the book list
function getBookIndex(element) {
    //Get book div
    let bookDiv = element.parentNode.parentNode; 

    //Get index
    return Array.from(bookList.childNodes).indexOf(bookDiv);
}

//Updates the elements in the book list
//Pretty sure this could be done in a better way, but I'm not sure how
function updateBookList() {

    //Remove child elements
    while(bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    //Loop through library and update book list
    library.forEach(book => bookList.append(book.getBookListItem()));
}

// Objects \\

function Book(title, author, pages, read, html) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.html = html;
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
    finishedButton.value = this.read ? "Undo" : "Finish";
    finishedButton.classList.add('book_button');

    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = "Delete";
    deleteButton.classList.add('book_button');

    finishedButton.addEventListener('click', finishBook);
    deleteButton.addEventListener('click', deleteBook);

    buttonsDiv.appendChild(finishedButton);
    buttonsDiv.appendChild(deleteButton);

    //Adds everything to book div
    bookDiv.append(title, author, pages, read, buttonsDiv);

    return bookDiv;
}