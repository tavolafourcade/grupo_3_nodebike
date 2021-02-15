let express = require("express");
let router= express.Router();

let productsController = require("../controllers/productsController");

router.get("/createProduct", productsController.createProduct);
router.get("/editProduct", productsController.editProduct); /* editProduct/:id?*/
router.get("/productDetail/:idProduct?", productsController.productDetail);
router.get("/productList", productsController.productList);

module.exports = router;