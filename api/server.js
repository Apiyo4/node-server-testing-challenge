const express = require('express');
const configureMiddleware = require('./configure-middleware');

const server = express();
configureMiddleware(server); 

server.get('/', (req,res)=>{
    res.status(200).json(`Api is working`)
})


module.exports = server;