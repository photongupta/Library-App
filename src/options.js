const bookStoreLib = require("./bookStore.js");
const addBookLib = require("./addBook.js");
const adminLib = require("./admin.js");

// const parseOptionArgs = function(optionsAndArgs) {
//   let options = {
//     "-search": {},
//     "-borrow": "soch k btayenge",
//     "-add": {}
//   };
//   options["-search"]["-a"] = bookStoreLib.parseBookListByAuthor;
//   options["-search"]["-l"] = bookStoreLib.getAllBooks;
//   let option1 = optionsAndArgs[0];
//   let option2 = optionsAndArgs[1];
//   let arg = optionsAndArgs.slice(2);
//   return options[option1][option2](arg);
// };

const parseOptionArgs = function(optionsAndArgs) {
  let option = optionsAndArgs[0];
  let options = {
    "-search": parseSearchBook,
    "-borrow": "borrowBook",
    "-submit": "submitBook",
    "-admin": adminLib.setAdminPassward,
    "-add": addBookLib.addBook
  };
  let arg = optionsAndArgs.slice(1);
  return options[option](arg);
};

const parseSearchBook = function(optionAndArgs) {
  let option = optionAndArgs[0];
  let options = {
    "-a": bookStoreLib.parseBookListByAuthor,
    "-l": bookStoreLib.getAllBooks
  };
  let arg = optionAndArgs.slice(1);
  return options[option](arg);
};

exports.parseOptionArgs = parseOptionArgs;
exports.parseSearchBook = parseSearchBook;
