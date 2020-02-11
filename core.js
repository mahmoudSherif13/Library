let library = {};
let libraryId = 0;
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = libraryId++;
}
Book.prototype.info = ()=>{
    return `${this.title} by ${this.author}, ${this.pages} pages , ${(this.read)?"readed":"not read yet"}`;
};
function addBookToLibrary(book){
    library[book.id] = book;
}
function removeBookFormLibrary(id) {
    delete library[id];
}