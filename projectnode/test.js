var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('hai,sohail riyas\n');
}).listen(3000, '0.0.0.0', () => {
    console.log('Server running at http://0.0.0.0:3000/');
});
