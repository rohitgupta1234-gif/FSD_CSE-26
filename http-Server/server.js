const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Hello Rohit! This is my local server.");
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
