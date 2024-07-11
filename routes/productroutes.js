const express = require('express');
const router = express.Router();

const ProductController = require('../controller/ProductController');


router.post('/', ProductController.AddProduct);



module.exports = router;