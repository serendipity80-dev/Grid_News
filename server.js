const express = require ('express');
const liveReload = require('livereload');
const connectLiveReload = require('connect-livereload');

const server = express();
const liveReloadServer = liveReload.createServer();

server.use(connectLiveReload());
server.use(express.static('/home/dci/Documents/Grid_News/assignment-grid-responsive-website'));

liveReloadServer.watch('/home/dci/Documents/Grid_News/assignment-grid-responsive-website');

const port = 3025;
server.listen(port, function(){
    console.log(`Server is listening to the port: ${port}`);
});