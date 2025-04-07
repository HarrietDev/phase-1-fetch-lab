function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(Response => Response.json())
  .then(data => {
   renderBooks(data)
   //console.log(data);
   return data;
  });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
