process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);

const onData = function() {
  let userPassword = "";
  return function(data) {
    const password = "password";
    if (data.charCodeAt(0) == 127) {
      process.stdout.moveCursor(-1, 0);
      userPassword = userPassword.slice(0, -1);
    }
    if (data.charCodeAt(0) == 13) {
      if (userPassword == password) {
        process.stdout.write("\npassword hacking seekha h kya");
        this.status = true;
        process.stdin.pause();
      }
      process.stdout.write(
        "\nare jab pta nhi hai to  energy kyu waste kr rhe ....\n"
      );
      process.stdin.pause();
      userPassword = "";
    } else {
      process.stdout.write("*");
      userPassword = userPassword + data;
    }
  };
};

const passwordStatus = { status: false };
const checkPassword = onData();
process.stdin.on("data", checkPassword.bind(passwordStatus));
