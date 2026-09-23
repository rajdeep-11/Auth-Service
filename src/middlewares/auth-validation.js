//validation for signIN / signUp
const validateAuthRequest = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            error: 'Email or Password missing'
        });
    }
    next();
}

module.exports = {
    validateAuthRequest
}