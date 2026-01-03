const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello DevOps! App deployed using Jenkins & Docker");
});

server.listen(3000, () => {
  console.log("App running on port 3000");
});
