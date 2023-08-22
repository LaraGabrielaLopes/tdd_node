const http = require('http');

http.createServer((req, res) => {
    res.end('Server On.');  
}).listen(process.env.PORT || 3000);