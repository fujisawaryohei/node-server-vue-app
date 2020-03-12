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
    function posts_handle(request, response) {
        switch (request.method) {
            case 'POST':
                responseReq(request, response);
                break;
            default:
                response.end("500 Internal Server Error");
                break;
        }
    }
    exports.posts_handle = posts_handle;
    function responseReq(request, response) {
        const bufferBody = new Array();
        let responseBody;
        request.on('data', (requestData) => {
            bufferBody.push(requestData);
        }).on('end', () => {
            responseBody = Buffer.concat(bufferBody).toString();
            response.end(responseBody);
        });
    }
});
