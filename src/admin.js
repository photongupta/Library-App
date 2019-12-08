const SimpleCrypto = require("simple-crypto-js").default;
const { Say } = require("say");
const say = new Say();

const getMessage = function() {
  let message = "password updated successfully";
  say.speak(message);
  return message;
};

const setAdminPassword = function(args, extra, fileOperationTools) {
  let myPassword = args.password.toString();
  let secretKey = "rashmi123";
  let crypto = new SimpleCrypto(secretKey);
  let cipherText = crypto.encrypt(myPassword);
  fileOperationTools.fileOperations.writer(
    fileOperationTools.pathsAndEncoding.pathOfPassward,
    cipherText,
    fileOperationTools.pathsAndEncoding.encoding
  );
  return getMessage();
};

exports.setAdminPassword = setAdminPassword;
