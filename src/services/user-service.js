const { UserRepository } = require('../repositories');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/server-config');
const bycrpt = require('bcrypt');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw error;
        }
    }

    //signIn flow:

    //fetch the user via email:
    //check for password matching:
    //if passowrd macth create a new JWT token and send it:

    async signIn(userEmail, userPassword) {
        try {
            const user = await this.userRepository.getByEmail(userEmail);
            const passwordMatch = this.checkPassword(userPassword, user.password);
            if (!passwordMatch) {
                console.log('Password not match');
                throw { error: 'incorrect password' };
            }
            const newJwtToken = this.createToken({ email: user.email, id: user.id });
            return newJwtToken;

        } catch (error) {
            console.log('Something went wrong during signIn');
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log('Something went wrong in jwt creation');
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            console.log('Something went wrong in jwt verification', error);
            throw error;
        }
    }

    checkPassword(userPassword, encryptedPssword) {
        try {
            return bycrpt.compareSync(userPassword, encryptedPssword);
        } catch (error) {
            console.log('Something went wrong during password check');
            throw error;
        }
    }
}

module.exports = UserService;