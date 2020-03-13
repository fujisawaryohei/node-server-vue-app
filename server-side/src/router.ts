import * as http from "http";
import * as HomeController from "./controllers/HomeController";
import * as PostsController from "./controllers/PostsController";

export default function routes(request: http.IncomingMessage , response: http.ServerResponse){
    switch(request.url){
        case '/':
            switch(request.method){
                case 'GET':
                    HomeController.home_handle(request, response);
                    break;
                default: 
                  response.end('204 No Content');
                  break;
            }
            break;
        case '/login': 
            switch(request.method){
                case 'POST':
                    // TODO: 認証機能
                    break;
                default: 
                    response.end('204 No Cotnent');
                    break;
            }
            break;
        case '/posts':
            switch(request.method){
                case 'GET':
                    // TODO: 投稿一覧を返す処理
                break;
                case 'POST':
                    // TODO: 保存処理を作る
                    PostsController.responseReq(request, response);
                    break;
                case 'PUT': 
                   //TODO: 連絡先の更新をする
                    break;
                case 'DELETE':
                    //TODO: 連絡先の削除処理をする
                    break;
                default: 
                    response.end("204 No Cotent");
                    break;
            }
            break;
        case '/posts/^\d*$/':
        default:
            response.end("204 No Content");
            break; 
    }
}