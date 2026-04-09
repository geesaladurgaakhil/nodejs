const http = require('http');

const server = http.createServer((req, res)=> {
   res.end('Hello from cloud Run 24');
})
server.listen(8080);
