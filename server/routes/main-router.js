const express = require('express');
const decodeJWT = require('../middlewares/decode-jwt');
const { getAllProducts } = require('../services/product-service');

const router = express.Router();

router.get('/', decodeJWT, getAllProducts);

module.exports = router;
