const User = require('../models/User');
const { errorHandler } = require('../utils/helpers');

exports.registerUser = (req, res, next) => {
    const { firstname, lastname, email, password } = req.body.contact;
    const user = new User({
        contact: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        },
        additional_info: {

        }
    })
    return user.save()
        .then( result => {
            res.json({
                message: "registered",
                data: result
            })
        })
        .catch(err => {
            throw errorHandler("Something went wrong", 500, err)
        })
}