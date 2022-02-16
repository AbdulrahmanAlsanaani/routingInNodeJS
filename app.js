const http = require("http");
const fs = require("fs");
const url = require("url");

server = http.createServer(function(req, res) {
    let reqUrl = url.parse(req.url, true);
    let quer = reqUrl.query;
    if (!(Object.keys(quer).length === 0)) {
        if (quer.role == "admin") {
            fs.readFile('login.html', function(err, page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            });
        } else {
            fs.readFile('notFound.html', function(err, page) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            });
        }
    } else {
        if (req.url == "/" || req.url == "/index") {
            fs.readFile('index.html', function(err, page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            });
        } else if (req.url == "/about.html") {
            fs.readFile('about.html', function(err, page) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
                res.end();
            });
        }
    }

    //   else if( req.url ==`${pat}?role=admin`)
    //         {





    // else { //will be executed only for new.html


    // }
    // if(q.query.role=="admin"){
    //     fs.readFile('admin.html', function(err, page) {
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.write(page);
    //         res.end();
    //     });
    // }else{
    //     res.writeHead(404, {'Content-Type': 'text/html'});
    //     res.write("not found");
    // }
});

server.listen(3000);