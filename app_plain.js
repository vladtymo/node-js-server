// server logic

const http = require('http');

const hostname = 'localhost';
const port = 3400;

function NotFoundResponse(res) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Not Found");
}

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case '/api/users':
                    res.end("User list...");
                    break;
                case '/api/contacts':
                    res.end("Contact list...");
                    break;
                default:
                    NotFoundResponse(res);
                    break;
            }
            break;
        case 'POST':
            res.end("POST method...");
            break;
        default:
            NotFoundResponse(res);
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is listening http://${hostname}:${port}`);
});