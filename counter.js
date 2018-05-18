var http = require('http');
var usercount = 0;
http.createServer(function (request, response){
console.log('new connection');
usercount++;
response.writeHead(200, {'Content-Type': 'text/plain'});
response.write('Hello!\n');
response.write('We have had '+usercount+' visits!\n');
response.end();
}).listen(8080)
console.log('serverStarted');
