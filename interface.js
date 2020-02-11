function getBookView(book){
    const bookView = document.createElement("div");
    bookView.classList.add("book");
    if(book.read){
        bookView.style.borderColor = 'green';
    }
    // title view
    const titleView = document.createElement("div");
    titleView.innerText = book.title;
    titleView.classList.add("name");
    bookView.append(titleView);
    // author view
    const authorView = document.createElement("div");
    authorView.innerText = book.author;
    authorView.classList.add("author");
    bookView.append(authorView);
    // pages view
    const pagesView = document.createElement("div");
    pagesView.innerText = book.pages;
    pagesView.classList.add("pages");
    bookView.append(pagesView);
    // delete btn view
    const deleteBtnView = document.createElement("button");
    deleteBtnView.innerText = "Remove";
    deleteBtnView.classList.add("deleteBtn");
    deleteBtnView.addEventListener("click" , ()=>deleteBook(book.id));
    bookView.append(deleteBtnView);
    // toggle read btn view
    const toggleReadBtnView = document.createElement("button");
    toggleReadBtnView.innerText = "toggle";
    toggleReadBtnView.classList.add("toggleReadBtn");
    toggleReadBtnView.addEventListener("click" , ()=>{
        toggleRead(book.id);
        loadLibraryView();
    });
    bookView.append(toggleReadBtnView);

    return bookView;
}
function deleteBook(id) {
    removeBookFormLibrary(id);
    loadLibraryView();
}
function loadLibraryView(){
    const lib = document.getElementById("library");
    lib.innerHTML = "";
    for(let key in library){
        lib.append(getBookView(library[key]));
    }
}