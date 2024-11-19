const mongoose = require('mongoose');

const Schema = mongoose.Schema

const productsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true })


// creates a collection in a database named 'products' pluralizing from the name 'Product'
module.exports = mongoose.model('Product', productsSchema)