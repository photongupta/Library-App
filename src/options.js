const bookStoreLib = require("./bookStore.js");
const addBookLib = require("./addBook.js");
const adminLib = require("./admin.js");
const borrowBookLib = require("./borrowBook.js");
const submitBookLib = require("./submitBook.js");

const parseOptionArgs = function(optionsAndArgs) {
  let option = optionsAndArgs[2];
  let options = {
    "--search": bookStoreLib.parseSearchBook,
    "--borrow": borrowBookLib.borrowGivenBook,
    "--submit": submitBookLib.submitGivenBook,
    "--admin": adminLib.setAdminPassword,
    "--add": addBookLib.addBookToTheLibrary
  };
  let args = parseUserOptions(optionsAndArgs.slice(3));
  return { cmdRef: options[option], args: args };
};

const parseUserOptions = function(userOptions) {
  const args = {};
  for (let index = 0; index < userOptions.length; index = index + 2) {
    args[userOptions[index].slice(2)] = userOptions[index + 1];
  }
  return args;
};

exports.parseOptionArgs = parseOptionArgs;
