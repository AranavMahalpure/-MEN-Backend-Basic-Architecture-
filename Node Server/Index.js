const http=require("http");
const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url=='/about'){
        console.log("aranavmahalpure");
     }
})
server.listen(3000)
