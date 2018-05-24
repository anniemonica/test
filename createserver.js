var http = require('http');
http.createServer(function(req, res){
res.write('Hello everyone');
res.end();
}).listen(8080); 


