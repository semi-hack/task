var http = require('http');
const url = require('url')

var server = http.createServer((req, res) => {
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end('hello world/n');
    const reqUrl = url.parse(req.url, true);

    //GET
    if(reqUrl.pathname == '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.end("Hello World Welcome to WeJapa Internships")
    }

    //P0ST
    if(reqUrl.pathname == '/' && req.method === 'POST') {
        body = '';
        req.on('data', (chunk)=> {
            body += chunk;
        });

        req.on('end', ()=> {
            reqBody = JSON.parse(body)
            var namee = JSON.stringify(reqBody.name)
            res.writeHead(200, {'Content-Type': 'application/json'})
            res.end(`Hello ${namee}, welcome to WeJapa Internships`)
        })
    }
});




server.listen(4000, '127.0.0.1');