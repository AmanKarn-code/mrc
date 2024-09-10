const { Schema, model} = require("mongoose");

const serviceSchema = new Schema({
    price: {
        type: Number,   // Corrected type from Integer to Number
        required: true, // Add required if necessary
    },
    description: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
    },
});

const Service = new model("Service", serviceSchema);  // Capitalized model name
module.exports = Service;
