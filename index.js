var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function(request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8; image/jpg");
	if (request.method === 'GET' && request.url === '/html-template') {
		fs.readFile('./index.html', 'utf-8', function(err, data) {
			if (err) throw err;
			response.write(data);
			response.end();
		});
	} else {
		response.writeHead(200, {
			'Content-Type': 'image/jpg'
		});
		fs.readFile('404.jpg', function(err, data) {
			if (err) throw err;
			response.statusCode = 404;
			response.write(data);
			response.end();
		});
	};
});

server.listen(8080);