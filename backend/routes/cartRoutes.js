const express = require('express');

const {
    getCartProducts,
    deleteProduct,
    updateProduct,
    addProduct
} = require('../controllers/cartProductController')

const router = express.Router();

// to add a product into the shopping cart
router.post('/', addProduct)

// to get cart products
router.get('/', getCartProducts)

// to delete a product from the shopping cart
router.delete('/:id', deleteProduct)

// OPTIONAL: to update a product in the shopping cart (change the quantity)
router.patch('/:id', updateProduct)


module.exports = router