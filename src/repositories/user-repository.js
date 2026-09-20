const e = require('express');
const { User } = require('../models/index');

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in repo layer during create');
            throw error;
        }
    }

    async destroy(userId) {
        try {
            const response = await User.destroy({
                where: {
                    id: userId
                }
            });
            return response;
        } catch (error) {
            console.log('Something went wrong in repo layer during destroy');
            throw error;
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log('Something went wrong while get the user');
            throw error;
        }
    }
}

module.exports = UserRepository;

