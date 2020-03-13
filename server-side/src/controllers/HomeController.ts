import * as http from "http";

export function home_handle(request: http.IncomingMessage, response: http.ServerResponse){
    switch(request.method){
        case 'GET':
            response.end("hello world");
        break;
        default:
            response.end("500 Internal Server Error");
    }
}
