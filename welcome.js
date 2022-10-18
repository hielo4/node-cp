var fs = require("fs");

fs.writeFile("welcome.txt", "hello node", function (err) {
  if (err) throw err;
  console.log("file created succefully");
});
