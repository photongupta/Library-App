const SimpleCrypto = require("simple-crypto-js").default;
const utils = require("./utilities");

const isPasswordCorrect = function(args, fileOperationTools) {
  let crypto = new SimpleCrypto("rashmi123");
  let chiperText = utils.read(
    fileOperationTools,
    fileOperationTools.pathsAndEncoding.pathOfPassward
  );
  let dechiperText = crypto.decrypt(chiperText);
  return args.passward == dechiperText;
};

const getBookId = function(bookList) {
  let lastId = Math.max(...Object.keys(bookList));
  return lastId == -Infinity ? 1 : lastId + 1;
};

const isSameBookExist = function(args) {
  return function(bookDetail) {
    return (
      bookDetail.authorName == args.author && bookDetail.bookName == args.book
    );
  };
};

const getTotalCountOfSameBooks = function(args, allBookList) {
  let count = 1;
  count =
    count + Object.values(allBookList).filter(isSameBookExist(args)).length;
  return count;
};

const addBookToTheLibrary = function(args, allBooksDetail, fileOperationTools) {
  if (isPasswordCorrect(args, fileOperationTools)) {
    let bookStatus = addBook(args, allBooksDetail, fileOperationTools);
    return bookStatus;
  }
  return errorMessage();
};

const addBook = function(args, allBooksDetail, fileOperationTools) {
  let bookDetail = {
    bookName: args.book,
    authorName: args.author,
    IssueStatus: false
  };
  let totalNoOfBooks = getTotalCountOfSameBooks(
    args,
    allBooksDetail.allBooksList
  );
  let extraDetailOfBook = {
    totoalPages: args.pages,
    cost: args.cost,
    totalNoOfBooks: totalNoOfBooks,
    availableBooks: totalNoOfBooks
  };
  let bookId = getBookId(allBooksDetail.allBooksList);
  allBooksDetail.allBooksList[bookId] = bookDetail;
  allBooksDetail.booksDetail[args.book] = extraDetailOfBook;
  utils.write(
    fileOperationTools,
    allBooksDetail.booksDetail,
    fileOperationTools.pathsAndEncoding.pathOfBooksDetail
  );
  utils.write(
    fileOperationTools,
    allBooksDetail.allBooksList,
    fileOperationTools.pathsAndEncoding.pathOfBookList
  );
  return "book is Added successFuly";
};

const errorMessage = function() {
  return "oooppss......!!!!!!   \npassWard is wrong ....\nplease enter correct passward in order to add the book in library.";
};

exports.addBookToTheLibrary = addBookToTheLibrary;
