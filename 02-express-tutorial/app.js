
const http = require('http');
const server = http.createServer((req, res) => {
  //console.log(req.method);
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello this is Home page</h1>")
  res.end();
});

server.listen(5000);