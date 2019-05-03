const express = require('express');
const router = express.Router();


const product_controller = require('../controllers/product.controller');



router.get('/test',product_controller.test);
router.post('/create', product_controller.product_create);
router.get('/testPromiseChain', product_controller.product_test_promise);
router.get('/:id', product_controller.product_details);
router.get('/productLike/:id', product_controller.product_details_relative);


module.exports = router;