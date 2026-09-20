const express = require('express');
const bodyParser = require('body-parser')

const { SERVERCONFIG } = require('./config');
const apiRoutes = require('./routes');

//const { User } = require('./models/index')

const serverPort = SERVERCONFIG.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes)

const prepareAndStartServer = () => {
    app.listen(serverPort, async () => {
        console.log(`Server running at PORT ${serverPort}`);
        //console.log(User);
    });
}

prepareAndStartServer();