import * as http from "http";

export function responseReq(request: http.IncomingMessage, response: http.ServerResponse){
    const bufferBody: Buffer[] = new Array();
    let responseBody: string;
    request.on('data', (requestData: Buffer)=>{
        bufferBody.push(requestData);
    }).on('end', ()=>{
        responseBody = Buffer.concat(bufferBody).toString();
        response.end(responseBody);
    });
}

