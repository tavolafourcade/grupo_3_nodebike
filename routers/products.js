let express = require("express");
let router= express.Router();

let productsController = require("../controllers/productsController");

router.get("/createProduct", productsController.createProduct);
router.get("/edit-product/:id", productsController.editProduct); /* editProduct/:id?*/
router.get("/product-detail/:id", productsController.productDetail);
router.get("/productList", productsController.productList);

module.exports = router;