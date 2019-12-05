const fs = require("fs");

const getFileOperationTools = function() {
  let fileOperations = {
    reader: fs.readFileSync,
    writer: fs.writeFileSync,
    fileExist: fs.existsSync
  };
  let pathsAndEncoding = {
    encoding: "utf8",
    pathOfPassward: "./admin.json",
    pathOfBooksDetail: "./booksDetail.json",
    pathOfBookList: "./bookList.json",
    pathOfIssuedBook: "./IssueDetail.json"
  };
  let fileOperationTools = { fileOperations, pathsAndEncoding };
  return fileOperationTools;
};

const read = function(fileOperationTools, path) {
  let content = fileOperationTools.fileOperations.reader(
    path,
    fileOperationTools.pathsAndEncoding.encoding
  );
  return content;
};

const doesFileExist = function(fileOperationTools, path) {
  return fileOperationTools.fileOperations.fileExist(path);
};

const write = function(fileOperationTools, content, path) {
  let contentToWrite = JSON.stringify(content);
  fileOperationTools.fileOperations.writer(
    path,
    contentToWrite,
    fileOperationTools.pathsAndEncoding.encoding
  );
};

const readFile = function(fileOperationTools, path) {
  let beverageRecords = "{}";
  if (doesFileExist(fileOperationTools, path)) {
    const fileContent = read(fileOperationTools, path);
    beverageRecords = fileContent == "" ? beverageRecords : fileContent;
  }
  beverageRecords = JSON.parse(beverageRecords);
  return beverageRecords;
};

const getAllBooksDetail = function(fileOperationTools) {
  let allBooksList = readFile(
    fileOperationTools,
    fileOperationTools.pathsAndEncoding.pathOfBookList
  );
  let booksDetail = readFile(
    fileOperationTools,
    fileOperationTools.pathsAndEncoding.pathOfBooksDetail
  );
  return { allBooksList, booksDetail };
};

exports.readFile = readFile;
exports.getAllBooksDetail = getAllBooksDetail;
exports.getFileOperationTools = getFileOperationTools;
exports.read = read;
exports.write = write;
