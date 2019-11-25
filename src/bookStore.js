const fs = require("fs");

const getAllBooks = function() {
  let bookList = fs.readFileSync("./src/bookList.json", "utf8");
  bookList = JSON.parse(bookList);
  return bookList;
};

const isAuthorBookAvailable = function(author) {
  let bookList = getAllBooks();
  return bookList.hasOwnProperty(author);
};

const giveBooksOfAuthor = function(author) {
  let bookList = getAllBooks();
  return bookList[author];
};

const parseBookListByAuthor = function(authorList) {
  let author = authorList[0];
  let bookListOfAuthor = [];
  if (isAuthorBookAvailable(author)) {
    bookListOfAuthor = giveBooksOfAuthor(author);
    return bookListOfAuthor;
  }
  let errorMessage = "author is not listed.";
  bookListOfAuthor.push(errorMessage);
  return bookListOfAuthor;
};

exports.parseBookListByAuthor = parseBookListByAuthor;
exports.getAllBooks = getAllBooks;
exports.isAuthorBookAvailable = isAuthorBookAvailable;
exports.giveBooksOfAuthor = giveBooksOfAuthor;
