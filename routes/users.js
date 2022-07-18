const { Router } = require('express');

const {
    registerUser
} = require('../controlers/user');

const usersRouter = Router();

usersRouter.post('/register', registerUser)

module.exports = usersRouter