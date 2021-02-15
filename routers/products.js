let express = require("express");
let router= express.Router();

let productsController = require("../controllers/productsController");

router.get("/createProduct", productsController.createProduct);
router.get("/editProduct/:id?", productsController.editProduct);
router.get("/productDetail", productsController.productDetail);
router.get("/productList", productsController.productList);

module.exports = router;