import * as http from "http";

export function posts_handle(request: http.IncomingMessage, response: http.ServerResponse){
    switch(request.method){
        case 'POST':
            responseReq(request, response);
            break;
        default: 
            response.end("500 Internal Server Error");
            break;
     }
}

function responseReq(request: http.IncomingMessage, response: http.ServerResponse){
    const bufferBody: Buffer[] = new Array();
    let responseBody: string;
    request.on('data', (requestData: Buffer)=>{
        bufferBody.push(requestData);
    }).on('end', ()=>{
        responseBody = Buffer.concat(bufferBody).toString();
        response.end(responseBody);
    });
}

