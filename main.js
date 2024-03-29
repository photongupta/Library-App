const optionsLib = require("./src/options.js");
const utils = require("./src/utilities.js");

const main = async function() {
  let cmdRefAndArgs = optionsLib.parseOptionArgs(process.argv);
  let cmdRef = cmdRefAndArgs.cmdRef;
  let args = cmdRefAndArgs.args;
  let fileOperationTools = utils.getFileOperationTools();
  let allBooksDetail = utils.getAllBooksDetail(fileOperationTools);
  let messageToShow = await cmdRef(args, allBooksDetail, fileOperationTools);
  console.log(messageToShow);
};

main();
