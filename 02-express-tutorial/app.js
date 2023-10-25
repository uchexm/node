
const http = require('http');
const server = http.createServer((req, res) => {
  //console.log(req.method);
  console.log(req.url);
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello this is Home page</h1>")
    res.end();

  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello this is About page</h1>")
    res.end();

  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>Not found</h1>")
    res.end();

  }

});

server.listen(5000);