// keepalive.js

const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Discord self-bot is running!');
});

server.listen(PORT, () => {
  console.log(`Keepalive server is running on port ${PORT}`);
});
