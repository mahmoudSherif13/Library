let library = []
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.info = ()=>{
    return `${this.title} by ${this.author}, ${this.pages} pages , ${(this.read)?"readed":"not read yet"}`;
};
function addBookToLibrary(book){
    library.push(book);
}