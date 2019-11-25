const SimpleCrypto = require("simple-crypto-js").default;
const fs = require("fs");

const setAdminPassward = function(passward) {
  let myPassward = passward.toString();
  let secretKey = "rashmi123";
  let crypto = new SimpleCrypto(secretKey);
  let chiperText = crypto.encrypt(myPassward);
  fs.writeFileSync("./admin.json", chiperText, "utf8");
};

exports.setAdminPassward = setAdminPassward;
