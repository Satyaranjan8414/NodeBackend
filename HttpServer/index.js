//Build Your won Server

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1>Hello From landing Page</h1>");
  } else if (req.url == "/about") {
    res.end("<h1>Hello From about Page</h1>");
  } else if (req.url == "/result") {
    res.end("<h1>Hello From result Page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text.html" });
    res.end("<h1>404 Page Not Found Error</h1>");
  }
});

server.listen(8080, "127.0.0.1", () => {
  console.log("help Please");
});
