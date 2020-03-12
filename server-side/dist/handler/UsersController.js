(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function home_handle(request, response) {
        switch (request.method) {
            case 'GET':
                response.end("hello world");
                break;
            default:
                response.end("500 Internal Server Error");
        }
    }
    exports.home_handle = home_handle;
});
