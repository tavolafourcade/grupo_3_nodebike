const path= require("path");
const fs = require('fs');
const productsFilePath = path.join(__dirname, "../data/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let mainController = { 

    createProduct: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, "../views/products/createProduct.ejs"));*/
        res.render("products/createProduct");

    },

    editProduct: function(req, res) {
        let id = req.params.id;
        let productToEdit = products[id-1];
        res.render("products/editProduct", {productToEdit: productToEdit});
        /*let idProducto = req.params.id || "Sin ID";*/
    },

    productDetail: (req, res) => {
        let id = req.params.id;
        let bicicleta = products[id-1];
        res.render( "products/productDetail", {bicicleta: bicicleta});
    },

    productList:(req, res) =>{
        res.render( "products/productList", {products: products});
    },

    update: (req, res) => {
		let id = parseInt(req.params.id);
    let editProduct = req.body;
    products.forEach(product => {
      if(product.id === id){
        product.name = editProduct.name;
        product.description = editProduct.description;
        product.category = editProduct.category;
        product.price = editProduct.price;
        product.stock = editProduct.stock;
        
      }   
    });
		let edited = JSON.stringify(products);
    fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), edited);
    res.redirect('detail/' + id); 
	}

};

module.exports = mainController;