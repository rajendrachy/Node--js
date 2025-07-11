const http = require('http')
const fs = require('fs')


const server = http.createServer((request, response)=>{
    if(request.url == "/"){
        response.write("Home page")
        response.end()
    }else if(request.url == "/login"){
        fs.readFile('./login.html','utf-8',(err,data)=>{
            // response.setHeader('Content-Type', 'text/html')
            // console.log(response.getHeader('Content-Type'))
            response.writeHead(200,{'Content-Type': 'text/html'}) // 200 -> Status
            response.write(data)
            response.end()
        })
    } else if(request.url == "/image"){
        fs.readFile('./test.jpeg',(err, data)=>{
            if(!err){
                response.writeHead(200,{'content-type': 'image/jpeg'})
                response.write(data)
                response.end()
            }
        })
    }else{
        response.write("404 Not found")
        response.end()
    }
})



const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})



