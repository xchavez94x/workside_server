const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    contact: {
        firstname: {
            type: String, 
            required: true
        },
        lastname: {
            type: String, 
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String, 
            required: true
        }
    },
    additional_info: {
        phone: {
            type: Number, 
        }, 
        birthday: {
            type: String
        },
        profile_image: {
            type: String
        },
        experience: {
            job_title: {
                type: String
            },
            level: {
                type: String,
            },
            bio: {
                type: String,
            }
        }
    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema)
