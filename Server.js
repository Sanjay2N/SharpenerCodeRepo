const http=require('http');

function reqListener(request,response){
    console.log("Sanjay");
}
const server=http.createServer(reqListener);


server.listen(400);