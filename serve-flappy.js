const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001;
const filePath = path.join(__dirname, 'flappy.html');

const server = http.createServer((req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading game');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Flappy Bird running at http://localhost:${PORT}`);
});
