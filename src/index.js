const express = require('express');

const { SERVERCONFIG } = require('./config');

const serverPort = SERVERCONFIG.PORT;

const app = express();

const prepareAndStartServer = () => {
    app.listen(serverPort, () => {
        console.log(`Server running at PORT ${serverPort}`);
    });
}

prepareAndStartServer();