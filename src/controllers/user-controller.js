const { UserService } = require('../services');

const userService = new UserService();

const create = async (req, res) => {
    try {
        const response = await userService.create({
            email: req.body.email,
            password: req.body.password
        });
        return res.status(201).json({
            message: 'User create Successfully',
            data: response,
            success: true,
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

async function signIn(req, res) {
    try {
        const response = await userService.signIn(req.body.email, req.body.password);
        return res.status(201).json({
            message: 'Sign In successfully',
            data: response,
            success: true,
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error
        });
    }
}

const isAuthenticated = async(req, res) =>{
    try {
        const token = req.headers['x-access-token'];
        const response = await userService.isAuthenticated(token);
        return res.status(201).json({
            success: true,
            data: response,
            message: 'Successfully authenticated and token is valid',
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went while Authentication',
            data: {},
            err: error
        });
    }
}

module.exports = {
    create,
    signIn,
    isAuthenticated
}