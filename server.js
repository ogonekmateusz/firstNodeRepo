const http = require('http'); // Importujemy moduł http

const server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Server działa!");
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Serwer działa na porcie 3000");
});
    
