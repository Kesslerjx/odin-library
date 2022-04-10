//HTML Elements
var showFormButton = document.getElementById('show_form_button');
var bookForm = document.getElementById('book_form');
var books = document.getElementById('books');

//Event listeners
showFormButton.addEventListener('click', showForm);

//Functions

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
    }
}