"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var serve = http.createServer(function (request, response) {
    response.end("hello node!");
});
serve.listen(8000);
