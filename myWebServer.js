// //Q#-6
// //a,b
// const http = require("http");
// const server = http.createServer(function (req, res) {
//     //c, d
//     res.end("Request received and processed");
// });

// server.listen(1234, function () {
//     console.log("Server running to port 1234");
// });


// // ******************************************with express module
// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("Request received and processed by Express server by port 2345");
// });
// app.listen(2345, () => {
//     console.log("Express Server running on port 2345");
// });

// //Q#-7
// //a
// const randomNumber = require("./randomNumber");
// const http = require("http");


// const server = http.createServer(function (req, res) {

//     const randomNum = randomNumber.random(100);

//     res.writeHead(200, { 'Content-Type': 'text/html' });


//     res.end(String(randomNum));
// });

// server.listen(1234, function () {
//     console.log('Server listening on port 1234');
// });



// // ******************************************with express module
// const express = require("express");
// const randomNumber = require("./randomNumber");

// const app = express();

// app.get("/", (req, res) => {
//     const randomNum = randomNumber.random(100);
//     res.send(String(randomNum));
// });

// const PORT = 2345;
// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
// });


// //Q#-8
// //a,b,c,d
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const mimeTypes = require('mime-types');
// //file extention

// const server = http.createServer((req, res) => {
//     let filePath = req.url;

//     if (filePath === '/') {
//         filePath = '/about.html';
//     }

//     const requestedFile = path.join(__dirname, 'static', 'apple-html-css-replica', filePath);

//     fs.readFile(requestedFile, (err, data) => {
//         if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found');
//         } else {
//             const mimeType = mimeTypes.lookup(filePath) || 'application/octet-stream';
//             res.writeHead(200, { 'Content-Type': mimeType });
//             res.end(data);
//         }
//     });
// });

// server.listen(1234, () => {
//     console.log('Server listening on port 1234');
//     // console.log(__dirname)
// });


// //e
// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const mimeTypes = require('mime-types');

// const server = http.createServer((req, res) => {
//     let filePath = req.url;

//     if (filePath === '/') {
//         filePath = '/index.html';
//     }


//     const requestedFile = path.join(__dirname, 'static', 'apple-html-css-replica', filePath);
//     // console.log(requestedFile)

//     const mimeType = mimeTypes.lookup(filePath) || 'application/octet-stream';

//     fs.readFile(requestedFile, (err, data) => {
//         //asynchronously 
//         if (err) {
//             console.error('Error reading file:', err);
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('Not Found');
//         } else {
//             console.log('File served successfully:');
//             res.writeHead(200, { 'Content-Type': mimeType });
//             res.end(data);
//         }
//     });
// });

// server.listen(1234, () => {
//     console.log('Server listening on port 1234');
// });


// // ******************************************with express module

// const express = require("express");

// const app = express();
// const port = 1234;

// app.listen(port, (err) => {
//     if (err) {
//         console.error("Error starting the server:", err);
//     } else {
//         console.log(`Server listening on port ${port}`);
//     }
// });

// app.use(express.static("static/apple-html-css-replica"));

// app.get("/about", (req, res) => {
//     let filePath = __dirname + "/static" + "/about.html";
//     res.sendFile(filePath);
// })


// //or
// const express = require("express");
// const fs = require("fs");
// const path = require("path");
// const mimeTypes = require("mime-types");

// const app = express();
// const port = 1234;

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}`);
// });

// app.get("/", (req, res) => {
//     const filePath = "index.html";
//     serveFile(filePath, res);
// });

// app.get("/:filename", (req, res) => {
//     const filePath = `/${req.params.filename}`;
//     serveFile(filePath, res);
// });

// function serveFile(filePath, res) {
//     const requestedFile = path.join(__dirname, "static", "apple-html-css-replica", filePath);

//     const mimeType = mimeTypes.lookup(filePath) || "application/octet-stream";

//     fs.readFile(requestedFile, (err, data) => {
//         if (err) {
//             console.error("Error reading file:", err);
//             res.status(404).send("Not Found");
//         } else {
//             console.log("File served successfully:", requestedFile);
//             res.status(200).type(mimeType).send(data);
//         }
//     });
// }

// app.use(express.static("static/apple-html-css-replica"));



