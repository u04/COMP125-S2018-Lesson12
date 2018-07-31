const http = require('http');
const fs = require("fs");
const path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = "." + req.url;

  if(filePath == "./") {
    filePath = "./index.html";
  }

  let extName = path.extname(filePath);
  let contentType = "text/html";
  switch(extName){
    
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
