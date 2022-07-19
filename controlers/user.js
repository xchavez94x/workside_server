const User = require('../models/User');
const { validationResult } = require('express-validator')
const {
    errorHandler
} = require('../utils/helpers');
const {
    hash
} = require('bcryptjs')

exports.registerUser = async (req, res, next) => {
    const validationErrors = validationResult(req);
    const {
        firstname,
        lastname,
        email,
        password,
        confirmPassword
    } = req.body.contact;

    if(!validationErrors.isEmpty()) {
        const error = errorHandler(
            'Error validating inputs', 
            422, 
            validationErrors.array()
        )
        res.json(error)
        return next(error)
    }
    
    try {
        const fetchedUser = await User.findOne({
            "contact.email": email
        });

        if (fetchedUser) {
            const error = errorHandler("User has already been registered", 422, null)
            res.json(error)
            return next(error)
        }

        if (!fetchedUser && password === confirmPassword) {
            const encryptedPassword = await hash(password, 12)
                const newUser = new User({
                    contact: {
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        password: encryptedPassword
                    },
                    additional_info: {

                    }
            });

            const savedUser = await newUser.save()
            return res.json({
                message: "User has been registered successfully",
                code: 200,
                data: savedUser
            })

        } else {

            const error = errorHandler('Passwords are not identical', 422, 'Please check passwords')
            res.json(error)
            return next(error)

        }

    } catch (err) {

        const error = errorHandler("Something went wrong", 500, err)
        res.json(error)
        throw error
        
    }
}