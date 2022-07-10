const { Schema, model } = require('mongoose');

const JobsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    info: [{
            experinece: String
        },
        {
            location: String
        },
        {
            salary: String
        },
    ],
    description: {
        location: {
            type: String,
            required: true
        },
        overview: {
            type: String,
            required: true
        },
        requirments: [
            String
        ],
    },
    verified: Boolean
}, {
    timestamps: true
});

module.exports = model(
    'Jobs', 
    JobsSchema
)