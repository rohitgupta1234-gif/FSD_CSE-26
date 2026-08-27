// const http = require('http');
// http.createServer((request,response)=>{
//     // 1. Tell the browser everything is OK (status code 200), and the data is in plain text
//     response.writeHead(200,{
//         'Content-Type':'text/plain'
//     });

// response.write('Hello, World!\n');
//  // 3. Tell the server that all of the response headers and body have been sent
//  response.end();
// }).listen(4000); // 4. Tells the server what port to be o

const http = require('http');

http.createServer((request, response) => {

    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    response.write('Hello, World!\n');

    response.end();

}).listen(4000, () => {
    console.log('Server started at http://localhost:4000');
});

