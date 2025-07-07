// const http = require('http')
// const fs = require('fs')
// const querystring = require('querystring')

// const server = http.createServer((req, res)=>{
//     if(req.url == "/login" && req.method == "GET"){
//         fs.readFile('./login.html', (err, data)=>{
//             if(!err){
//                 res.writeHead(200, {'content-type': 'text/html'})
//                 res.write(data)
//                 res.end()
//             }
//         })
//     }else if(req.url == "/login" && req.method == "POST"){
//         let body = ""
//         req.on("data", (chunk)=>{
//             body += chunk.toString()
//         })
//         req.on('end', ()=>{
//             console.log(querystring.parse(body))
//         })
//     }
// })



// server.listen(3001, ()=>{
//     console.log('server started...');
// })



















//-----anothe------------------
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    if (req.url === "/login" && req.method === "GET") {
        fs.readFile('./login.html', (err, data) => {
            if (!err) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading login page');
            }
        });
    } else if (req.url === "/login" && req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedData = querystring.parse(body);
            console.log(parsedData);

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end('<h1>Login Received</h1><p>Check server console for data.</p>');
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3001, () => {
    console.log('Server started on http://localhost:3001');
});
