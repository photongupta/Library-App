const fs = require("fs");
const SimpleCrypto = require("simple-crypto-js").default;

const isPasswordCorrect = function(passward) {
  let crypto = new SimpleCrypto("rashmi123");
  let chiperText = fs.readFileSync("./admin.json", "utf8");
  let dechiperText = crypto.decrypt(chiperText);
  return passward == dechiperText;
};

const isAutherPresent = function(autherName, bookList) {
  return !bookList.hasOwnProperty(autherName);
};

const addBookToTheLibrary = function(oldBookList, optionsAndArgs) {
  let bookList = {};
  bookList = Object.assign(bookList, oldBookList);
  let bookName = optionsAndArgs[1];
  let autherName = optionsAndArgs[3];
  let passWord = optionsAndArgs[5];
  if (isPasswordCorrect(passWord)) {
    if (isAutherPresent(autherName, bookList)) {
      bookList[autherName] = [];
    }
    bookList[autherName].push(bookName);
  }
  return bookList;
};

const addBook = function(optionsAndArgs) {
  let oldBookListInString = fs.readFileSync("./bookList.json", "utf8");
  oldBookList = JSON.parse(oldBookListInString);
  let newBookList = addBookToTheLibrary(oldBookList, optionsAndArgs);
  let newBookListInString = JSON.stringify(newBookList, null, 2);
  if (newBookListInString != oldBookListInString) {
    fs.writeFileSync("./bookList.json", newBookListInString, "utf8");
    return displayMsg(true);
  }
  return displayMsg(false);
};

const displayMsg = function(isBookAdded) {
  if (isBookAdded) {
    return "book is added succesfully";
  }
  return "oooppss......!!!!!!   \npassWard is wrong ....\nplease enter correct passward in order to add the book in library.";
};

exports.addBook = addBook;
