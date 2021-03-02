const path= require("path");
const fs = require('fs');
const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

let mainController = { 

    createProduct: (req, res) => {
        /*res.sendFile(path.resolve(__dirname, "../views/products/createProduct.ejs"));*/
        res.render("products/createProduct");

    },

    editProduct: function(req, res) {
        let id = req.params.id;
        let bicicleta = products[id-1];
        res.render("products/editProduct", {bicicleta: bicicleta});
        /*let idProducto = req.params.id || "Sin ID";*/
    },

    productDetail: (req, res) => {
        let id = req.params.id;
        console.log('Este es el id ' + id);
        let bicicleta = products[id-1];
        res.render( "products/productDetail", {bicicleta: bicicleta});
    },

    productList:(req, res) =>{
        res.render( "products/productList", {products: products});
    }

};

module.exports = mainController;