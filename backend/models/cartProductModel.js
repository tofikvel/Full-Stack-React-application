const mongoose = require('mongoose');

const Schema = mongoose.Schema

const cartSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('CartProduct', cartSchema)