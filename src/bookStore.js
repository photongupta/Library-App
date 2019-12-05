const parseSearchBook = function(args, allBooksDetail) {
  let options = {
    author: getBookListOfAuthor,
    list: getAllBooks
  };
  return options[Object.keys(args)[0]](allBooksDetail, args);
};

const getAllBooks = function(allBooksDetail) {
  let bookList = Object.values(allBooksDetail.allBooksList);
  return bookList;
};

const isAuthorPresent = function(author) {
  return function(bookDetail) {
    return bookDetail.authorName == author;
  };
};

const getBookListOfAuthor = function(allBooksDetail, args) {
  let author = args.author;
  let bookList = allBooksDetail.allBooksList;
  let bookListOfAuthor = Object.values(bookList).filter(
    isAuthorPresent(author)
  );
  return bookListOfAuthor;
};

exports.getAllBooks = getAllBooks;
exports.isAuthorPresent = isAuthorPresent;
exports.getBookListOfAuthor = getBookListOfAuthor;
exports.parseSearchBook = parseSearchBook;
