let express = require("express");
let router= express.Router();

let productsController = require("../controllers/productsController");

router.get("/createProduct", productsController.createProduct);

//Editar producto
router.get("/edit/:id", productsController.editProduct); 
//router.put('/:id', productsController.update); 

/* editProduct/:id?*/
router.get("/product-detail/:id", productsController.productDetail);
router.get("/productList", productsController.productList);

module.exports = router;