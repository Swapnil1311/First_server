// server creation

const http = require("http");

const port = 8081;

http.createServer((req,res) =>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h4> Hello, this is my new server</h4>");
    res.end();
})
.listen(port,()=>{
    console.log(`My Node.js server started on port ${port}`);
});

// http://localhost:8081