const express = require('express');
const bodyParser = require('body-parser')

const { SERVERCONFIG } = require('./config');
const apiRoutes = require('./routes');

//const { UserRepository } = require('./repositories')

const serverPort = SERVERCONFIG.PORT;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes)

const prepareAndStartServer = () => {
    app.listen(serverPort, async () => {
        console.log(`Server running at PORT ${serverPort}`);

        //check the get by Id:

        // const userRepo = new UserRepository;
        // const response = await userRepo.getById(3);
        // console.log(response);
    });
}

prepareAndStartServer();