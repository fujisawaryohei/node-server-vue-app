'use strict';
const http = require('http');
const router = require('./lib/router');
const server = http.createServer();
const port = 8000;

server.on('request', (request, response)=>{
  response.writeHead(200, {
    'content-type':'application/json; charset=utf-8'
  });
  router.route(request, response);
})

server.on('error', (e)=>{
  console.error('Server error', e);
});

server.on('clienterror', (e)=>{
  console.error('ClientError', e);
});

server.on(port, ()=>{
  console.info(`listeninig on ${port}`);
});

server.listen(port);
