const express = require('express');

const {
    getAllStoreProducts,
    getStoreProduct,
    addProductToDb
} = require('../controllers/storeProductController')

const router = express.Router();

router.post('/', addProductToDb)

// to get all the products from the shop
router.get('/', getAllStoreProducts)

// to get a single product
router.get('/:id', getStoreProduct)


module.exports = router