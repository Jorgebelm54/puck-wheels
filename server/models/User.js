const { Schema, model } = require('mongoose');

const carSchema = require('./Car')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Needs valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        savedCars: [carSchema]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.virtual('carCount'). get(function () {
    return this.savedCars.length;
});

const User = model('User', userSchema);
module.exports = User;