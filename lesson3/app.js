'use strict'

const http = require('http');
const PORT = 4000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
  res.end('のり弁うまい\n');
}).listen(PORT);

console.log("1000円のり弁");
console.log(`Server running at http://localhost:${PORT}`);
