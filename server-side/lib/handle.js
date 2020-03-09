'use strict';
const pug = require('pug');
const postsFunc = require('./functions/posts-handler');

function handle(req, res){
    switch(req.method){
        case 'GET':
            res.writeHead(200, {
                'Content-Type':'text/html; charset=utf-8'
            });
            res.end(pug.renderFile('./views/posts.pug'));
            break;
        case 'POST' :
            postsFunc.getPosts(req, res);
            break;
    }
}

module.exports = {
    handle
}