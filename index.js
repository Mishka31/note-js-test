const http = require('http')
fs = require('fs');
const PORT = 8081


const requestHandler = (request, response) => {
    fs.readFile('./index.html',function (err, data){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(data);
    });
}

const server = http.createServer(requestHandler)

server.listen(PORT, (err) => {
    if (err) {
        console.error('Error at a server launch', err);
    }
    console.log(`Server work at port ${PORT}`);
})