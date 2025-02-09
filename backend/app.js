"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var http_1 = require("http");
var socket_io_1 = require("socket.io");
var app = (0, express_1.default)();
var httpServer = (0, http_1.createServer)(app);
var io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: ["http://localhost:5173"],
        exposedHeaders: ['Content-Type']
    }
});
io.on('connection', function (socket) {
    console.log("A user connected");
});
app.get('/', function (req, res) {
    res.send("Hello world!");
});
httpServer.listen(3000, function () {
    console.log("Server listening on port 3000");
});
