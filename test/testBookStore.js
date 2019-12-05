// const bookStoreLib = require("../src/bookStore.js");
// const assert = require("assert");

// describe("parseBookListByAuthor", function() {
//   it("should give all the available book of given Author", function() {
//     let actual = bookStoreLib.parseBookListByAuthor(["A. P. J. Abdual Kalam"]);
//     let expected = [
//       "Ignited Minds",
//       "My Journey",
//       "Wings Of Fire",
//       "Believe In Yourself",
//       "Beyond 2020"
//     ];
//     assert.deepStrictEqual(actual, expected);
//   });

//   it("should give an error massege when author is not available", function() {
//     let actual = bookStoreLib.parseBookListByAuthor(["Rashmi"]);
//     let expected = ["author is not listed."];
//     assert.deepStrictEqual(actual, expected);
//   });
// });

// describe("getAllBooks", function() {
//   it("it should give an object having key of author name with their corresponding books", function() {
//     let actual = bookStoreLib.getAllBooks();
//     let expected = {
//       "A. P. J. Abdual Kalam": [
//         "Ignited Minds",
//         "My Journey",
//         "Wings Of Fire",
//         "Believe In Yourself",
//         "Beyond 2020"
//       ],
//       "Jawahar Lal Nehru": [
//         "Discovery Of India",
//         "India Short Introductions",
//         "Who Is Bharat Mata"
//       ],
//       "Ruskin Bond": [
//         "The Blue Umbrella",
//         "Delhi Is Not Far",
//         "A Face In The Dark",
//         "Khoon Maaf"
//       ]
//     };
//     assert.deepStrictEqual(actual, expected);
//   });
// });

// describe("isAuthorBookAvailable", function() {
//   it("should validate if Author is available", function() {
//     let actual = bookStoreLib.isAuthorBookAvailable("Ruskin Bond");
//     let expected = true;
//     assert.strictEqual(actual, expected);
//   });

//   it("should not validate if Author is not available", function() {
//     let actual = bookStoreLib.isAuthorBookAvailable("Trinangkur");
//     let expected = false;
//     assert.strictEqual(actual, expected);
//   });
// });

// describe("giveBooksOfAuthor", function() {
//   it("should give all the books of given author", function() {
//     let actual = bookStoreLib.giveBooksOfAuthor("Ruskin Bond");
//     let expected = [
//       "The Blue Umbrella",
//       "Delhi Is Not Far",
//       "A Face In The Dark",
//       "Khoon Maaf"
//     ];
//     assert.deepStrictEqual(actual, expected);
//   });
// });
