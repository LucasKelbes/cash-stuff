const http = require("http");
const PORT = 3000;

var audio = new Audio()

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello world!");
});

server.listen(PORT, () => {
    console.log(`Server running at PORT:${PORT}`);
});