const http=require('http');
const rout=require('./routes');
const server=http.createServer(rout.handler);
server.listen(40);