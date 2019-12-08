const SimpleCrypto = require("simple-crypto-js").default;

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
  return "password updated successfully";
};

exports.setAdminPassword = setAdminPassword;
