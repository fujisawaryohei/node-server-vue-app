(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "http", "./router"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const http = require("http");
    const router_1 = require("./router");
    class APIServer {
        constructor() {
            this.port = 8000;
            this.responseConfig = (request, response) => {
                response.writeHead(200, {
                    'content-type': 'application/json; charset=utf-8'
                });
                router_1.default(request, response);
            };
            this.serverError = (server, eventName) => {
                server.on(eventName, (e) => {
                    console.info("ServerError", e.message);
                });
            };
            this.clientError = (server, eventName) => {
                server.on(eventName, (e) => {
                    console.info("clientError", e.message);
                });
            };
        }
        initServer() {
            const server = http.createServer((reqeust, response) => {
                this.responseConfig(reqeust, response);
            }).listen(this.port, () => {
                console.info(`listening on ${this.port}`);
            });
            this.serverError(server, "error");
            this.clientError(server, "clientError");
        }
    }
    exports.default = APIServer;
});
