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

module.exports = {
    create,
    signIn
}