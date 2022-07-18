const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    info: {
        firstname: {
            type: String, 
            required: true
        },
        lastname: {
            type: String, 
            required: true
        },
        birthday: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    },
    contact: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number, 
            required: true
        }, 
        password: {
            type: String, 
            required: true
        }
    },
    experience: {
        title: {
            type: String
        },
        level: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        }
    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema)
