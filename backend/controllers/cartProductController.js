const CartProduct = require('../models/cartProductModel');
const mongoose = require('mongoose');

// add a product to a shopping cart
const addProduct = async (req, res) => {
    const { title, price, quantity, image } = req.body

    try {
        const product = await CartProduct.create({ title, price, quantity, image })
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// get all products in the shopping cart
const getCartProducts = async (req, res) => {
    const products = await CartProduct.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}

// delete a product from the shopping cart
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" })
    }

    const product = await CartProduct.findOneAndDelete({ _id: id })
    // checks whether the id property of the document is equal to a params

    if (!product) {
        return res.status(404).json({ error: "No such product" })
    }

    res.status(200).json(product);
}

// update a product in a shopping cart
const updateProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" })
    }

    const product = await CartProduct.findByIdAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!product) {
        return res.status(404).json({ error: "No such product" })
    }

    res.status(200).json(product)
}

module.exports = {
    getCartProducts,
    deleteProduct,
    updateProduct,
    addProduct
}