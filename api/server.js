const express = require('express');

const server = express();

server.get('/', (req,res)=>{
    res.status(201).json(`Api is working`)
})

module.exports = server;