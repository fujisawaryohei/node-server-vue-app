'use strict';

function handle(req, res){
    switch(req.method){
        case 'GET': 
            res.end('posts');
            break;
        case 'POST':
            break;
        default:
            break;
    }
}

module.exports = {
    handle
}