'use strict';

const handle = require("../handle");

function getPosts(req, res){
    let body = [];
    req.on('data', (chunk)=>{
        body.push(chunk);
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();
        res.end(body);
    });
}

module.exports = {
    getPosts
}