let express = require("express");
let router= express.Router();

let productsController = require("../controllers/productsController");

router.get("/createProduct", productsController.createProduct);

//Editar producto
router.get("/edit/:id", productsController.editProduct); 

//Obteniendo el detalle del producto
router.get("/product-detail/:id", productsController.productDetail);

//Obteniendo el listado de productos
router.get("/productList", productsController.productList);

//Actualizando informacion
router.put('/edit/:id', (req,res)=>{
  res.send("Fui por PUT");
}); 

//Eliminando producto
router.delete("/delete/:id", function(req,res){
  res.send("SOY DELETE");
})

module.exports = router;