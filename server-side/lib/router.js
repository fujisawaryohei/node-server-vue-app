'use strict';
const handler= require('./handle');

function route(req, res){
    switch(req.url){
        case '/posts':
            handler.handle(req, res);
            break;
        case '/logout':
            //TODO: ログアウト処理
            break;
        default:
            break; 
    }
}

module.exports = {
    route
};