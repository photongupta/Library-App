const utils = require("./utilities");

const getAllSimilarBooks = function(args, bookList) {
  let sameBooks = {};
  for (let bookId in bookList) {
    if (
      bookList[bookId].bookName == args.book &&
      bookList[bookId].authorName == args.author
    ) {
      sameBooks[bookId] = bookList[bookId];
    }
  }
  return sameBooks;
};

const getBookId = function(args, bookList) {
  let sameBookInLibrary = getAllSimilarBooks(args, bookList);
  for (let id in sameBookInLibrary) {
    if (sameBookInLibrary[id].IssueStatus == false) {
      sameBookInLibrary[id].IssueStatus = true;
      return id;
    }
  }
  return 0;
};

const getSerialNo = function(issuedBookRecord) {
  let lastId = Math.max(...Object.keys(issuedBookRecord));
  return lastId == -Infinity ? 1 : lastId + 1;
};

const isBookAvailable = function(bookName, booksDetial) {
  return booksDetial[bookName].availableBooks > 0;
};

const borrowGivenBook = function(args, allBooksDetail, fileOperationTools) {
  if (isBookAvailable(args.book, allBooksDetail.booksDetail)) {
    let issuedBookRecord = utils.readFile(
      fileOperationTools,
      fileOperationTools.pathsAndEncoding.pathOfIssuedBook
    );
    let bookIdOfRequiredBook = getBookId(args, allBooksDetail.allBooksList);
    let currentBorrowDetail = {
      personName: args.name,
      bookName: args.book,
      bookId: bookIdOfRequiredBook,
      authorName: args.author
    };
    let serialNo = getSerialNo(issuedBookRecord);
    issuedBookRecord[serialNo] = currentBorrowDetail;
    allBooksDetail.booksDetail[args.book].availableBooks =
      allBooksDetail.booksDetail[args.book].availableBooks - 1;
    utils.write(
      fileOperationTools,
      issuedBookRecord,
      fileOperationTools.pathsAndEncoding.pathOfIssuedBook
    );
    utils.write(
      fileOperationTools,
      allBooksDetail.allBooksList,
      fileOperationTools.pathsAndEncoding.pathOfBookList
    );
    utils.write(
      fileOperationTools,
      allBooksDetail.booksDetail,
      fileOperationTools.pathsAndEncoding.pathOfBooksDetail
    );
    return "book is added in issued list";
  }
  return "book is not available now......";
};
exports.borrowGivenBook = borrowGivenBook;
