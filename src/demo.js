const http = require('http');
const fs = require('fs');
const stringDecoder = require('string_decoder').StringDecoder;
const url = require('url');

const server = http.createServer((req, res)=>{
    let decoder = new stringDecoder('utf-8');
    let buffer='';
    req.on('data',(data)=>{
        buffer += decoder.write(data);
    })
    req.on('end',(end)=>{
        buffer += decoder.end();
        res.end('Hello Node.js');
        console.log(buffer)
    })
})

server.listen(8080,()=>{
    console.log(`Server is running at http://localhost:8080`);
})