const optionsLib = require("./src/options.js");

const main = function() {
  let userOptions = process.argv.slice(2);
  let messageToShow = optionsLib.parseOptionArgs(userOptions);
  console.log(messageToShow);
};

main();
