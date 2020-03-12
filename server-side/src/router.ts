import * as http from "http";
import * as PostsController from "./handler/PostsController";
import * as HomeController from "./handler/HomeController";

export default function routes(request: http.IncomingMessage , response: http.ServerResponse){
    switch(request.url){
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