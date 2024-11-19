const Product = require('../models/productModel');
const mongoose = require('mongoose');

// to add new products to the store
const addProductToDb = async (req, res) => {
    const products = req.body;
    try {
        const insertedProducts = await Product.insertMany(products);
        res.status(200).json(insertedProducts);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// get all the products in the main store
const getAllStoreProducts = async (req, res) => {
    const products = await Product.find({}).sort({ createdAt: -1 })
    res.status(200).json(products)
}

// get a single product
const getStoreProduct = async (req, res) => {
    const { id } = req.params; // gets the product's id from the URL
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such product" })
    }

    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({ error: "No such product" })
    }

    res.status(200).json(product);
}


module.exports = {
    getAllStoreProducts,
    getStoreProduct,
    addProductToDb
}