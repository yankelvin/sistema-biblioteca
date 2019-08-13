const sequence = {
  _id: 1,
  get id() {
    return this._id++;
  }
};

const books = {};

function saveBook(book) {
  if (!book.id) book.id = sequence.id;
  books[book.id] = book;
  return book;
}

function getBook(id) {
  return books[id] || [];
}

function getBooks() {
  return Object.values(books);
}

function deleteBook(id) {
  if (books[id]) {
    const book = books[id];
    delete books[id];
    return book;
  }
}

module.exports = { saveBook, getBook, getBooks, deleteBook };
