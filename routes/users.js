const { Router } = require('express');
const { check, body } = require('express-validator')

const {
    registerUser
} = require('../controlers/user');

const usersRouter = Router();

usersRouter.post(
    '/register', [
        body('contact.email').isEmail().withMessage('Please enter a valid email.'),
        body('contact.password')
            .isLength({min: 5})
            .withMessage('Please enter a stronger password')
            .isAlphanumeric()
            .withMessage('Please use numbers and lettres')
    ]
    , 
    registerUser
)

module.exports = usersRouter