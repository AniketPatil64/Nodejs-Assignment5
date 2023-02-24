// import the "http" module in a Node.js
//"http" module provides a set of functions for creating an HTTP server 
var http = require("http");

//adding values to port number and hostname
const PORT = 8081;
const hostname = 'localhost';

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const url = req.url
    //when we enter with url "/welcome"
    if (url === '/welcome') {
        res.statusCode = 201;
        res.end("Welcome to Dominos!");
    }
    // when we enter with url "/contact"
    else if (url === "/contact") {
        res.statusCode = 200;
        res.end(
            JSON.stringify({
                phone: "18602100000",
                email: "guestcaredominos@jublfood.com",
            })
        );
    } 
    //if one of request is not pass it will got to status code 404
    else {
        res.statusCode = 404;
        res.end(`Error 404 Page Not Found!!`);
    }
}

//after listening server
httpServer.listen(PORT, hostname, () => {
    console.log(`address of server :  http://${hostname}:${PORT}`);
})