// Routes d'accès à la DB

const express = require('express')
const router = express.Router()

const {
    getAllProducts, 
    getProductbyId
}  = require('../controller/productControllers')

//@desc GET ALL products from db
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@desc GET a product by id from db
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductbyId)


module.exports = router