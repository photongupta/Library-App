const addBookLib = require("../src/addBook");
const assert = require("assert");
const fs = require("fs");

// describe("displayMsg", function() {
//   it("should display message according to the boolian value", function() {
//     let actual = addBookLib.addBook(true);
//     let expected = "book is added succesfully";
//     assert.strictEqual(actual, expected);
//   });

//   it("should display message according to the boolian value", function() {
//     let actual = addBookLib.addBook(false);
//     let expected =
//       "oooppss......!!!!!!   \npassWard is wrong ....\nplease enter correct passward in order to add the book in library.";
//     assert.deepStrictEqual(actual, expected);
//   });
// });

// describe("readGivenFile", function() {
//   it.only("should read the content of given file", function() {
//     fs.writeFileSync("./testing.json", '{ "name": "rashmi" }', "utf8");
//     let fileName = "testing";
//     let actual = addBookLib.readGivenFile(fileName);
//     let expected = { name: "rashmi" };
//     assert.deepStrictEqual(actual, expected);
//     fs.unlinkSync("./testing.json");
//   });
// });
