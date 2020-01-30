const express = require('express');
const configureMiddleware = require('./configure-middleware');
const UserRouter = require('../users/userRouter');

const server = express();
configureMiddleware(server); 

server.use('/api', UserRouter);

server.get('/', (req,res)=>{
    res.status(200).json(`Api is working`)
})


module.exports = server;