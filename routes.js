const fs=require('fs');
const reqListener=(request,response)=>{

    const url=request.url;
    const method=request.method;
    if(url==='/'){
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>My First page</title></head>');
        response.write('<body><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">send</button></form></body>');
        return response.end();
        }
    if(url==="/message" && method==="POST"){
        const body=[];
        request.on('data',chunk=>{
        console.log("chunk  "+chunk)
        body.push(chunk);

});
    request.on('end',()=>{
        
        const parsedBody=Buffer.concat(body).toString();
        const message=parsedBody.split("=")[1];
        fs.writeFileSync('message.txt',message);
        
        fs.readFile("message.txt",'utf8', function(err, data){ 
            
            console.log(`sama ${data}`)
            response.write('<html>');
            response.write('<head><title>My First page</title></head>');
            response.write(`<body><p class="pdata">${data}</p><form action="/message" method="POST" ><input type="text" name="message"><button type="submit">send</button></form></body>`);
            return response.end();

        });
        





    })
    // fs.writeFileSync("message.text","Something");
    // response.statusCode=302;
    // response.setHeader('location','/');
    // return response.end();
    // }
    // response.setHeader('Content-Type','text/html');
    // response.write('<html>');
    // response.write('<head><title>My First page</title></head>');
    // response.write('<body><p>Hello I am inside of the HTML</p></body>');

    // response.write('</html>');
    // response.end();

}}

// module.exports=reqListener;
// module.exports={
//     handler:reqListener,
//     text:"some text"
// }

exports.handler=reqListener;
exports.text="some text";