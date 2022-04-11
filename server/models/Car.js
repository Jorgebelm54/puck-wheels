const { Schema } = require('mongoose');

const carSchema = new Schema({
    model: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    carId: {
        type: String,
        required: true
    }
});

module.exports = carSchema;