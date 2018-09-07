var http = require('http');
var fs = require('fs');


var server = http.createServer();

server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/index.html') {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) throw err;
            response.setHeader("Content-Type", "text/html; charset=utf-8;");
            response.write(data);
            response.end();
        });
    } else {
        response.statusCode = 404;
        fs.readFile('./cat.jpg', function (err, data) {
            console.log(data);
            response.setHeader("Content-Type", "image/jpeg;");
            if (err) throw err;
            response.write(data);
            response.end();
        });
    }
});

server.listen(8080);