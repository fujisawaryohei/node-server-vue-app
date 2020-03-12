import * as http from "http";
import route from "./router";

export default class APIServer {  
  public initServer(): void{
    const server = http.createServer((reqeust: http.IncomingMessage, response: http.ServerResponse)=>{
        this.responseConfig(reqeust, response);
    }).listen(this.port, ()=>{
        console.info(`listening on ${this.port}`);
    });
    this.serverError(server, "error");
    this.clientError(server, "clientError");
  }

  private port: number = 8000;

  private responseConfig = (request: http.IncomingMessage, response: http.ServerResponse)=>{
    response.writeHead(200, {
      'content-type':'application/json; charset=utf-8'
    });
    route(request, response);
  }

  private serverError = (server: http.Server, eventName: string)=>{
    server.on(eventName, (e: Error)=>{
      console.info("ServerError", e.message);
    });
  }

  private clientError = (server: http.Server, eventName: string)=>{
    server.on(eventName, (e: Error)=>{
      console.info("clientError", e.message);
    })
  }
}