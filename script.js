const form = document.getElementById("addNewBookForm");
const addNewBookBtn = document.getElementById("addNewBookBtn");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const pageInput = document.getElementById("pagesInput");
const readInput = document.getElementById("readInput");
const doneBtn = document.getElementById("DoneBtn");

function doneBtnHandle() {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pageInput.value;
    const read = readInput.checked;
    addBookToLibrary(new Book(title , author , pages , read));
    form.style.visibility = "hidden";
    loadLibraryView();
    clear();
}
function clear(){
    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    readInput.checked = false;
}
doneBtn.addEventListener('click' , doneBtnHandle);
addNewBookBtn.addEventListener('click' , ()=>form.style.visibility = "visible");