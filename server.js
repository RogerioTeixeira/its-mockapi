const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/public', express.static('public'));
server.use(router);

server.listen(port, function () {
    console.log(`app listening on port ${port}`);
});