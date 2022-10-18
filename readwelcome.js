const fs = require("fs");

fs.readFile(
  "D:/Users/User/Desktop/New folder (3)/welcome.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);
