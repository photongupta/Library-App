const SimpleCrypto = require("simple-crypto-js").default;

const setAdminPassward = function(args, extra, fileOperationTools) {
  let myPassward = args.passward.toString();
  let secretKey = "rashmi123";
  let crypto = new SimpleCrypto(secretKey);
  let chiperText = crypto.encrypt(myPassward);
  fileOperationTools.fileOperations.writer(
    fileOperationTools.pathsAndEncoding.pathOfPassward,
    chiperText,
    fileOperationTools.pathsAndEncoding.encoding
  );
};

exports.setAdminPassward = setAdminPassward;
