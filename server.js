const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("<html><body><h1>This is HTML</h1></body></html>");
};

const server = http.createServer(requestListener);
server.listen(3000);
