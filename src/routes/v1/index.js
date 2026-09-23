const express = require('express');

const { UserController } = require('../../controllers');
const { AuthRequestValidator } = require('../../middlewares')

const router = express.Router();

router.post('/signup', 
    AuthRequestValidator.validateAuthRequest,
    UserController.create
);

router.post('/signin',
    AuthRequestValidator.validateAuthRequest, 
    UserController.signIn
);

router.get(
    '/isAuthenticated',
    UserController.isAuthenticated
);

module.exports = router;