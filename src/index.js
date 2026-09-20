const express = require('express');
const bodyParser = require('body-parser')

const { SERVERCONFIG } = require('./config');
const apiRoutes = require('./routes');

//const { UserRepository } = require('./repositories')
const { UserService } = require('./services')

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

        // const userService = new UserService();
        // // const newToken = userService.createToken({email:'raj@google.com', id: 2});
        // // console.log('new token', newToken);

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhakBnb29nbGUuY29tIiwiaWQiOjIsImlhdCI6MTc4OTg4NTU1MCwiZXhwIjoxNzg5ODg1NTgwfQ.m7RnRZrW1VAVEeBSSm7MASb-ft5Ah-3V9L43CKn8Qvw';

        // const verifyNewToken = userService.verifyToken(token)
        // console.log(verifyNewToken);
    });
}

prepareAndStartServer();