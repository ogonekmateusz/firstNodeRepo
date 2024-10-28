const http = require('http'); // Importujemy moduł http

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("Strona główna");
        res.end();
    } else if(req.url === "/contact") {
        res.write("Kontakt");
        res.end();
    }else {
        res.write("Błąd 404 page not found");
        res.end();
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log("Serwer działa na porcie 3000");
});
    
