// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const { getProducts, getIndex2, createProduct } = require('../controller/controller');

// http method
router.get('/', getProducts);

router.get('/index2', getIndex2)

//Post
router.get('/add', createProduct);

module.exports = router;