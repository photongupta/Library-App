const optionsLib = require("../src/options.js");
const assert = require("assert");
describe("parseOptionArgs", function() {
  it("should return string according to the options and arguments", function() {
    let actual = optionsLib.parseOptionArgs(["-search", "-l"]);
    let expected = {
      "A. P. J. Abdual Kalam": [
        "Ignited Minds",
        "My Journey",
        "Wings Of Fire",
        "Believe In Yourself",
        "Beyond 2020"
      ],
      "Jawahar Lal Nehru": [
        "Discovery Of India",
        "India Short Introductions",
        "Who Is Bharat Mata"
      ],
      "Ruskin Bond": [
        "The Blue Umbrella",
        "Delhi Is Not Far",
        "A Face In The Dark",
        "Khoon Maaf"
      ]
    };
    assert.deepStrictEqual(actual, expected);
  });
  it("parseOptionArgs", function() {
    let actual = optionsLib.parseOptionArgs(["-search", "-a", "Ruskin Bond"]);
    let expected = [
      "The Blue Umbrella",
      "Delhi Is Not Far",
      "A Face In The Dark",
      "Khoon Maaf"
    ];
    assert.deepStrictEqual(actual, expected);
  });
});
