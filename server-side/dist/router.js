(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./handler/PostsController", "./handler/HomeController"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const PostsController = require("./handler/PostsController");
    const HomeController = require("./handler/HomeController");
    function routes(request, response) {
        switch (request.url) {
            case '/':
                HomeController.home_handle(request, response);
            case '/posts':
                PostsController.posts_handle(request, response);
                break;
            default:
                response.end("404 No Routing");
                break;
        }
    }
    exports.default = routes;
});
